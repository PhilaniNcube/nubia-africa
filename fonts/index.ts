import { Raleway, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["400", "500","600", "700"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500","600", "700"],
});


export const futura = localFont({
  src: "./futura light bt.ttf",
});