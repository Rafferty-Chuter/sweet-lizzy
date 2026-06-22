import type { Metadata } from "next";
import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sweet Lizzy — Farnham's Favourite Sweet Shop",
  description:
    "Sweet Lizzy is an independent sweet shop in Farnham, Surrey. Pick 'n' Mix, sweets in jars, American candy, fudge, chocolate, truffles and gift hampers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${nunito.variable}`}
    >
      <body className="font-body antialiased min-h-screen">{children}</body>
    </html>
  );
}
