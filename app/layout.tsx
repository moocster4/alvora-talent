import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alvora Talent",
  description: "A talent agency representing world-class creators and athletes.",
  openGraph: {
    title: "Alvora Talent",
    description: "A talent agency representing world-class creators and athletes.",
    url: "https://alvoratalent.com",
    siteName: "Alvora Talent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
