import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Valgo Connect — World-class Macedonian talent for US businesses",
  description:
    "Valgo Connect recruits, vets and manages highly educated professionals in North Macedonia for US businesses — talent outsourcing plus full foreign entity setup and management. More value per dollar.",
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
    </html>
  );
}
