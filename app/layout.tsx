import './globals.css'

import { Metadata} from 'next'
import Navbar from '@/components/Layout/Navbar';
import { raleway } from '@/fonts';
import Footer from '@/components/Layout/Footer';
import { Toaster } from 'sonner';





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
