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
      sizes: "57x57",
      url: "/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
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
