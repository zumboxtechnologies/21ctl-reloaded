import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "21st Century Technologies",
  description:
    "Building Africa's Largest Digital Infrastructure · Software Development. We develop and deploy business solutions like HR, CRM, cTap, Call Centre Software, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
