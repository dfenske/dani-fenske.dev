import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "./theme-provider";
import { Metadata } from "next";

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
      <Header />
      <div className="m-4 p-4 flex-1">{children}</div>
      <Footer />
    </ThemeProvider>
  );
}
