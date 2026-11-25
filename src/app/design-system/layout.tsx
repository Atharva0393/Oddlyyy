import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System | Internal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

