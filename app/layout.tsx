import './globals.css'

import { Metadata} from 'next'
import Navbar from '@/components/Layout/Navbar';
import { futura, raleway } from '@/fonts';
import Footer from '@/components/Layout/Footer';
import { Toaster } from 'sonner';


export const metadata:Metadata = {
  metadataBase: new URL('https://www.nubia.africa.com'),
  title: 'Nubia Africa',
  description: 'Nubia Africa is a tax and accounting firm that provides services to small businesses and large corporations',
  keywords: 'tax, accounting, business, corporation, services',
  icons: [
   {
    url: '/images/logo_square.webp',
   }
  ],
  openGraph: {
    url: 'https://nubia.africa.com',
    type: 'website',
    title: 'Nubia Africa',
    description: 'Nubia Africa is a tax and accounting firm that provides services to small businesses and large corporations',
    images: [{
      url: '/images/logo_square.webp',
      width: 400,
      height: 400,
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
      <body className={`${futura.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
