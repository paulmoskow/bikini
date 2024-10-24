import type { Metadata } from "next";
import Image from "next/image";

import localFont from "next/font/local";
import { Exo_2 } from 'next/font/google';
import "./globals.css";

import Header from "./components/header";

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
        <div className="grid grid-rows-[65px_1fr_100px] min-h-screen mx-auto w-[98%] max-w-[1024px] font-[family-name:var(--font-exo2)]">
          <Header />
          <main className="flex flex-col gap-1 row-start-2 align-center mx-0">
            <h1 className="text-center lowercase text-[11px] font-middle mx-0 my-2">
              Онлайн шоурум пляжной одежды 
              <Image 
                src="/bikini/map_point.svg"
                alt="Location Pin" 
                className="inline-block mx-1" 
                width={12}
                height={12}
              />
              Москва
            </h1>
            <div className="flex items-center justify-center w-full mx-0">
              {children}
            </div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          </footer>
        </div> 

      </body>
    </html>
  );
}
