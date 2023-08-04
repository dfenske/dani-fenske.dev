import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import { karla, bungee } from "@/fonts";
import clsx from "clsx";
import { ThemeProvider } from "./theme-provider";

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
    <ThemeProvider>
      <html lang="en">
        <body
          className={clsx(
            karla.variable,
            bungee.variable,
            "flex flex-col min-h-screen"
          )}
        >
          <Header />
          <div className="m-4 rounded-lg dark:outline-white outline-black p-4 outline-1 outline flex-1">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
