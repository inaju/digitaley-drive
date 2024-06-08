import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "rsuite/dist/rsuite.min.css";
import { Toaster } from "sonner";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";

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
      <body className={`${inter.className} bg-lightPrimary max-w-[100vw] overflow-x-hidden`}>
        <Toaster />
        <Header />
        {children}
        <Footer />
        <Script src="./node_modules/preline/dist/preline.js"></Script>
      </body>
    </html>
  );
}
