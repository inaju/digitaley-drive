import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "rsuite/dist/rsuite.min.css";


import "./globals.css";
import NavBar from "./components/nav";
import Header from './components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digitaley Drive",
  description:
    "Empowering Growth through Quality Education | Explore a Range of flexible courses designed to introduce you to the world of data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${inter.className} bg-lightPrimary`}>

          {/* <NavBar /> */}
          <Header />
          {children}
          <Script src="./node_modules/preline/dist/preline.js"></Script>
        </body>
      </html>
  );
}
