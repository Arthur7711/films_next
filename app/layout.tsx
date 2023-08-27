import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopSlider } from "../components/TopSlider";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "films",
  description: "best movies of all time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <TopSlider />
        {children}
      </body>
    </html>
  );
}
