import type { Metadata } from "next";
import "./globals.css";
import "../public/Neue_Haas_Grotesk_Display_Pro/stylesheet.css";

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
      <body className="font-neuereg antialiased">{children}</body>
    </html>
  );
}
