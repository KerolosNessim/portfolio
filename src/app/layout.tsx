import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
const sora = Sora({
  variable: "--font-geist-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerolos Nessim",
  description: "Frontend React js and Next js Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased relative lg:pt-[150px] pt-[120px]  `}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
