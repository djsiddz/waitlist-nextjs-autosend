import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ticktoes.com'),
  title: "TickToes | Demo for Next.js AutoSend Email Integration",
  description: "TickToes is a fictional product for a demo of Next.js AutoSend Email Integration",
  icons: {
    icon: "/logoipsum-379.svg",
  },
  openGraph: {
    title: "TickToes | Demo for Next.js AutoSend Email Integration",
    description: "TickToes is a fictional product for a demo of Next.js AutoSend Email Integration",
    images: "/logoipsum-379.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster closeButton position="top-right" />
      </body>
    </html>
  );
}
