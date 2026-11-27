import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fraunces, Caveat, DM_Sans, Yellowtail } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition, WelcomeNoteModal } from "@/components/ui";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, getBaseUrl } from "@/lib/siteConfig";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structuredData";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Oddlyyy | Independent Creative Digital Studio",
    template: "%s | Oddlyyy",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  keywords: [
    "creative digital agency",
    "web development studio",
    "custom web applications",
    "Next.js web development",
    "AI automation agency",
    "business process automation",
    "brand identity design",
    "mobile app development",
    "business systems integration",
    "Oddlyyy studio",
    "Be the exception",
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseUrl(),
    siteName: siteConfig.name,
    title: "Oddlyyy | Independent Creative Digital Studio",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Oddlyyy Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oddlyyy | Independent Creative Digital Studio",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
    creator: "@oddlyyy",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yellowtail",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="en"
      className={`overflow-x-clip ${spaceGrotesk.variable} ${fraunces.variable} ${caveat.variable} ${dmSans.variable} ${yellowtail.variable}`}
    >
      <head>
        <JsonLd data={[orgSchema, webSiteSchema]} />
      </head>
      <body className="bg-paper bg-notebook-ruled text-ink font-primary antialiased selection:bg-yellow selection:text-ink min-h-screen flex flex-col justify-between overflow-x-clip">
        <WelcomeNoteModal />
        <Header />
        <main className="flex-1 overflow-x-clip">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
