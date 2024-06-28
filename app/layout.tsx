import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "@/components/Cursor";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

          {/* <Cursor className="" /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
