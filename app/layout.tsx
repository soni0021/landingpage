import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMRC-SAT | Dr. Anand Mani Residential Coaching Institute",
  description: "Start your NEET/JEE preparation journey with AMRC-SAT. Get admission to India's leading residential coaching institute with scholarship up to 100%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

