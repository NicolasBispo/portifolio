import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Nicolas Bispo Magalhães",
  description:
    "Portfólio pessoal de Nicolas Bispo Magalhães - Desenvolvedor Full Stack com 4 anos de experiência em NextJS, TypeScript, Rails, Django e mais",
  keywords: [
    "portfolio",
    "desenvolvedor",
    "full stack",
    "nextjs",
    "typescript",
    "rails",
    "django",
  ],
  authors: [{ name: "Nicolas Bispo Magalhães" }],
  openGraph: {
    title: "Portfolio | Nicolas Bispo Magalhães",
    description:
      "Portfólio pessoal de Nicolas Bispo Magalhães - Desenvolvedor Full Stack com 4 anos de experiência",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
