import './globals.css'
import { Oswald, Roboto_Mono, Raleway } from "next/font/google";
import { Metadata} from 'next'
import Navbar from '@/components/Layout/Navbar';




export const oswald = Oswald({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-oswald',
  weight: ["200", "400", "600", "700"]
});

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

export const metadata: Metadata = {
  title: "Nubia Africa",
  description: "For all your accounting needs",
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode,

}) {



  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
