import './globals.css'

import { Metadata} from 'next'
import Navbar from '@/components/Layout/Navbar';
import { raleway } from '@/fonts';
import Footer from '@/components/Layout/Footer';
import { Toaster } from 'sonner';


export const metadata:Metadata = {
  title: 'Nubia Africa',
  description: 'Nubia Africa is a tax and accounting firm that provides services to small businesses and large corporations',
  keywords: 'tax, accounting, business, corporation, services',
  icons: [
   {
    url: '/images/nubia_africa.webp',
   }
  ],
  openGraph: {
    images: [{
      url: '/images/nubia_africa.webp',
      width: 300,
      height: 200,
      alt: 'Nubia Africa logo',
    }]
  },
}
 




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
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
