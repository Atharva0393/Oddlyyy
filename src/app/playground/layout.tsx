import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Playground | Internal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

