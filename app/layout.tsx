import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/Inter-Variable.ttf", weight: "100 900", style: "normal" },
    {
      path: "./fonts/Inter-Italic-Variable.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
});

const anton = localFont({
  variable: "--font-anton",
  display: "swap",
  weight: "400",
  style: "normal",
  src: "./fonts/Anton-Regular.ttf",
});

const ogImage =
  "https://td633eg4xc.ufs.sh/f/1LKkK5jLRD7WInM843XnrmVfesKR5EYoa9pu0yzdQ6h7AFb3";

export const metadata: Metadata = {
  title: "Valgo Connect",
  description: "Where US ambition meets European excellence.",
  openGraph: {
    title: "Valgo Connect",
    description: "Where US ambition meets European excellence.",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1890,
        height: 1890,
        alt: "Valgo Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valgo Connect",
    description: "Where US ambition meets European excellence.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
