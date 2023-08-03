import "./globals.css";
import type { Metadata } from "next";
import Header from "./header";
import { karla, bungee } from "@/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Dani Fenske's Portfolio",
  description: "Dani Fenske's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(karla.variable, bungee.variable, "h-screen")}>
        <Header />
        <div className="page">{children}</div>
        <footer className="absolute inset-x-0 bottom-0 h-16">Footer</footer>
      </body>
    </html>
  );
}
