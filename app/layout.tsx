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
  title: "Movindu Lochana - Cloud Native & Full Stack Developer",
  description: "Portfolio of Movindu Lochana, a passionate Cloud Native and Full Stack Developer specializing in scalable systems, microservices, and modern web technologies.",
  keywords: [
    "Movindu Lochana",
    "Full Stack Developer",
    "Cloud Native",
    "Software Engineer",
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "Spring Boot",
    "Microservices",
    "DevOps",
    "Sri Lanka"
  ],
  authors: [{ name: "Movindu Lochana" }],
  creator: "Movindu Lochana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://movindulochana.dev",
    title: "Movindu Lochana - Cloud Native & Full Stack Developer",
    description: "Portfolio of Movindu Lochana, a passionate Cloud Native and Full Stack Developer specializing in scalable systems, microservices, and modern web technologies.",
    siteName: "Movindu Lochana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movindu Lochana - Cloud Native & Full Stack Developer",
    description: "Portfolio of Movindu Lochana, a passionate Cloud Native and Full Stack Developer specializing in scalable systems, microservices, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
