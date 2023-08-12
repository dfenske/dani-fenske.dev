import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "./theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dani Fenske | Portfolio",
  description: "Dani Fenske | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Header />
      <div className="px-4 sm:px-8 py-4 flex-1 flex flex-col">{children}</div>
      <Footer />
    </ThemeProvider>
  );
}
