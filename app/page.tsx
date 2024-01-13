import Image from 'next/image'
import Hero from './Hero'
import Services from './Services'
import Brand from './Brand'
import { ServicesCarousel } from '@/components/ServicesCarousel';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesCarousel />
    </main>
  );
}
