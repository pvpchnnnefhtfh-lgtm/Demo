import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fardarNode Status | System Monitoring",
  description: "Real-time status updates and incident reporting for fardarNode services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
