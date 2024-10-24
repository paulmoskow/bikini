import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo_2 } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'], 
  variable: "--font-exo2",
  weight: ['300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: "Bikini showroom by Pavel Moskov",
  description: "Multipage app for online shopping on Nextjs",
  icons: [
    { rel: "icon", url: "/bikinibomb_logo.svg", sizes: '16x16' },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
