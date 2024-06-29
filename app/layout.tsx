import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "@/components/Cursor";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { seoData } from "@/lib/data/SeoData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
    },
  ],
  description: seoData.description,
  keywords: seoData.keywords.join(","),
  metadataBase: new URL(seoData.url),
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/favicons/apple-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "36x36",
      url: "/favicons/android-icon-36x36.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicons/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
  ],
};
const mongo = localFont({
  src: "../public/fonts/MorangaBold.otf",
  variable: "--font-mongo",
});

const silka = localFont({
  src: "../public/fonts/Silka-Regular.otf",
  variable: "--font-silka",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mongo.variable} ${silka.variable} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />

          {/* <Cursor className="hidden xl:block" /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
