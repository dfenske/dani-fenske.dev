import { Karla, Bungee } from "next/font/google";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export { karla, bungee };
