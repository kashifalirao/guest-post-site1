import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashif Digital Tools Service - Free Online Tools for Everyone",
  description: "10+ Free digital tools including PDF converter, image compressor, SEO tools, QR generator, and more. Boost your productivity with our professional online tools.",
  keywords: "free tools, PDF converter, image compressor, SEO tools, backlink checker, QR generator, text to speech, plagiarism checker",
  authors: [{ name: "Kashif Digital Tools Service" }],
  openGraph: {
    title: "Kashif Digital Tools Service - Free Online Tools",
    description: "10+ Free digital tools for PDF conversion, SEO analysis, image optimization, and content creation",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}