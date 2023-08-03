import { Karla, Gloria_Hallelujah } from "next/font/google";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const gloria400 = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloria400",
});

export { karla, gloria400 };
