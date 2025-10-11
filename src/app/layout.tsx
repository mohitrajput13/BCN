import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Cube Solutions LLC - Empowering Digital Transformation",
  description: "Leading IT solutions provider in Dubai, UAE. We offer web development, mobile apps, UI/UX design, digital marketing, and cloud solutions to help businesses grow digitally.",
  keywords: "web development, mobile apps, UI/UX design, digital marketing, cloud solutions, Dubai, UAE, IT solutions",
  authors: [{ name: "Black Cube Solutions LLC" }],
  openGraph: {
    title: "Black Cube Solutions LLC - Empowering Digital Transformation",
    description: "Leading IT solutions provider in Dubai, UAE. We offer comprehensive digital solutions to help businesses grow and succeed.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Cube Solutions LLC - Empowering Digital Transformation",
    description: "Leading IT solutions provider in Dubai, UAE. We offer comprehensive digital solutions to help businesses grow and succeed.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
