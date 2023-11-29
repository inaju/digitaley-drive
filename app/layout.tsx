import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import NavBar from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digitaley Drive",
  description:
    "Empowering Growth through Data | Explore a Range of flexible courses designed to introduce you to the world of data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Script src="./node_modules/preline/dist/preline.js"></Script>
      </body>
    </html>
  );
}
