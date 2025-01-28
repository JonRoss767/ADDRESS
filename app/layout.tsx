import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADDRESS Calculator",
  description: "A Calculator app for ADDRESS",
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
