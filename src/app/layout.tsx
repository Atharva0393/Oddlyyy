import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "oddlyyy. — Be the exception.",
  description:
    "Oddlyyy is an unconventional creative digital agency crafting quirky, bold, and high-impact digital experiences for brands that dare to be different.",
  keywords: [
    "creative agency",
    "digital agency",
    "branding",
    "web design",
    "Oddlyyy",
    "oddlyyy",
    "Be the exception",
  ],
  authors: [{ name: "Oddlyyy Creative Studio" }],
  openGraph: {
    title: "oddlyyy. — Be the exception.",
    description:
      "Creative digital agency for brands that refuse to blend into the background.",
    siteName: "Oddlyyy",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body className="bg-cream text-ink font-primary antialiased selection:bg-terracotta selection:text-cream min-h-screen flex flex-col justify-between overflow-x-clip">
        <Header />
        <main className="flex-1 overflow-x-clip">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
