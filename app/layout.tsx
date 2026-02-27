import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Alvora Talent",
  description: "A modern talent management firm representing creators, athletes, and gamers.",
  openGraph: {
    title: "Alvora Talent",
    description: "A modern talent management firm representing creators, athletes, and gamers.",
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
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
