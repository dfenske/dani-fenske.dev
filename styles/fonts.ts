import { Karla, Bungee } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bungee",
});

export { karla, bungee };
