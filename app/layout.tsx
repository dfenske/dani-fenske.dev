import "./globals.css";
import type { Metadata } from "next";
import Header from "./header";
import { karla, gloria400 } from "@/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "dani-fenske.dev",
  description: "Dani Fenske's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(karla.variable, gloria400.variable, "h-screen")}>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
