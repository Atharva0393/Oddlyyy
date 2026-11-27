import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";
import { projectsData } from "@/content/projects";

// In-memory sliding-window rate limiter (5 requests per 10 minutes per IP)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  // Periodic garbage collection
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

// Sanitization helpers
function sanitizeText(str: string): string {
  // Strip control characters, carriage returns, and newlines to prevent header injection
  return str.replace(/[\r\n\t]/g, " ").replace(/[<>]/g, "").trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const ALLOWED_SERVICES = [
  "Web & Digital Platforms",
  "AI & Automation",
  "Branding & Identity",
  "Marketing & Content",
  "Business Systems",
  "Mobile Apps",
  "The Odd Jobs",
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: NextRequest) {
  try {
    // 1. Request size safeguard (limit payload to 30KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 30000) {
      return NextResponse.json(
        { success: false, error: "Payload exceeds acceptable size limit." },
        { status: 413 }
      );
    }

    // 2. Client IP extraction for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "unknown";

    if (checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submissions from your connection. Please wait a few minutes before trying again or email us directly at hello@oddlyyy.studio.",
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON body
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      message,
      selectedServices,
      project,
      website_hp,
      mountTimestamp,
    } = body;

    // 4. Spam protection: Honeypot check (hidden field)
    if (website_hp && typeof website_hp === "string" && website_hp.trim().length > 0) {
      // Silently accept bot submission without delivering email
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 5. Spam protection: Minimum submission duration (must be > 1000ms after form mount)
    if (mountTimestamp && typeof mountTimestamp === "number") {
      const elapsed = Date.now() - mountTimestamp;
      if (elapsed < 1000) {
        // Form submitted in under 1 second: automated bot script
        return NextResponse.json(
          { success: true, message: "Inquiry received." },
          { status: 200 }
        );
      }
    }

    // 6. Validate required fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please share a brief note about what you are exploring (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    // 7. Sanitize inputs and verify against schema
    const cleanName = sanitizeText(name).slice(0, 100);
    const cleanEmail = email.trim().slice(0, 254);
    const cleanCompany = company && typeof company === "string" ? sanitizeText(company).slice(0, 120) : "";
    const cleanMessage = message.trim().slice(0, 5000);

    // Verify selected services against allowed taxonomy
    const validServices: string[] = Array.isArray(selectedServices)
      ? selectedServices
          .filter((s): s is string => typeof s === "string" && ALLOWED_SERVICES.includes(s))
          .slice(0, 7)
      : [];

    // Verify referenced project against real project catalog
    let verifiedProjectTitle: string | undefined;
    if (project && typeof project === "string") {
      const trimmedProject = project.trim();
      const matched = projectsData.find(
        (p) =>
          p.slug === trimmedProject ||
          p.title.toLowerCase() === trimmedProject.toLowerCase()
      );
      if (matched) {
        verifiedProjectTitle = matched.title;
      }
    }

    // 8. Resend configuration check
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn(
        "[Contact API] RESEND_API_KEY is not configured in environment. Inquiry received but email dispatch pending."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is currently being configured on the server. Please email us directly at hello@oddlyyy.studio.",
        },
        { status: 503 }
      );
    }

    // 9. Construct email payload
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Oddlyyy Inquiries <onboarding@resend.dev>";
    const submissionDate = new Date().toUTCString();

    const subject = `[Project Inquiry] ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ""}`;

    const servicesText = validServices.length > 0 ? validServices.join(", ") : "General Inquiry";
    const projectText = verifiedProjectTitle ? verifiedProjectTitle : "None specified";

    const textContent = [
      "NEW PROJECT INQUIRY: ODDLYYY STUDIO",
      "========================================",
      `Client Name:  ${cleanName}`,
      `Email:        ${cleanEmail}`,
      `Company:      ${cleanCompany || "Not specified"}`,
      `Services:     ${servicesText}`,
      `Case Study:   ${projectText}`,
      `Submitted:    ${submissionDate}`,
      "",
      "CLIENT MESSAGE:",
      "----------------------------------------",
      cleanMessage,
      "========================================",
      "Sent via Oddlyyy Studio Contact Form (https://oddlyyy.vercel.app)",
    ].join("\n");

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; color: #222126; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 2px solid #222126; border-radius: 12px; box-shadow: 6px 6px 0px #222126; overflow: hidden; }
    .header { background: #A04C34; color: #F7F6F0; padding: 20px 28px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 28px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 8px 12px; border-bottom: 1px solid rgba(34,33,38,0.1); font-size: 14px; }
    .meta-table td.label { font-weight: 700; width: 140px; color: rgba(34,33,38,0.65); text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
    .meta-table td.value { font-weight: 600; color: #222126; }
    .pill { display: inline-block; padding: 3px 10px; background: #FFD84D; border: 1px solid #222126; border-radius: 99px; font-size: 12px; font-weight: 700; margin-right: 6px; margin-bottom: 4px; }
    .message-box { background: #FAF7F2; border-left: 4px solid #A04C34; border-radius: 4px; padding: 18px 20px; margin-top: 16px; font-size: 15px; line-height: 1.6; color: #222126; white-space: pre-wrap; }
    .footer { padding: 16px 28px; background: #F7F6F0; border-top: 1px solid rgba(34,33,38,0.1); font-size: 12px; color: rgba(34,33,38,0.6); text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Project Inquiry ✦</h1>
      <p>Oddlyyy Studio Direct Dispatch · ${escapeHtml(submissionDate)}</p>
    </div>
    <div class="content">
      <table class="meta-table">
        <tr>
          <td class="label">Client Name</td>
          <td class="value">${escapeHtml(cleanName)}</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #A04C34; font-weight: 700; text-decoration: underline;">${escapeHtml(cleanEmail)}</a></td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="value">${cleanCompany ? escapeHtml(cleanCompany) : "<em>Not supplied</em>"}</td>
        </tr>
        <tr>
          <td class="label">Services</td>
          <td class="value">
            ${
              validServices.length > 0
                ? validServices.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("")
                : "<em>General Inquiry</em>"
            }
          </td>
        </tr>
        <tr>
          <td class="label">Case Study</td>
          <td class="value">${verifiedProjectTitle ? `<strong>${escapeHtml(verifiedProjectTitle)}</strong>` : "<em>None referenced</em>"}</td>
        </tr>
      </table>

      <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(34,33,38,0.65); margin: 20px 0 8px;">Project Note & Goals:</h3>
      <div class="message-box">${escapeHtml(cleanMessage)}</div>
    </div>
    <div class="footer">
      Delivered directly to ${escapeHtml(toEmail)} · Reply directly to this email to reach ${escapeHtml(cleanName)}.
    </div>
  </div>
</body>
</html>
`;

    // 10. Execute send via Resend SDK
    const resend = new Resend(resendApiKey);

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (sendError) {
      console.error("[Contact API] Resend email transmission error:", sendError.message);
      return NextResponse.json(
        {
          success: false,
          error:
            "Email dispatch provider reported an issue. Please email us directly at hello@oddlyyy.studio.",
        },
        { status: 502 }
      );
    }

    // 11. Successful transmission response
    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully sent to Oddlyyy Studio.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Contact API] Unhandled server error:", message);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred. Please reach us at hello@oddlyyy.studio.",
      },
      { status: 500 }
    );
  }
}

