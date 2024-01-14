import Image from 'next/image'
import Hero from './Hero'
import Services from './Services'
import Brand from './Brand'
import { ServicesCarousel } from '@/components/ServicesCarousel';
import HomepageHero from './HomepageHero';

export default function Home() {
  return (
    <main>
      <div className="relative isolate">
        <div className="absolute inset-0 items-center justify-center w-full px-10 py-20 lg-py-32 opacity-30 flex  overflow-clip">
          <Image
            width="1024"
            height="1024"
            src="/images/Africa.webp"
            alt="people"
            className="object-cover w-full lg:scale-[60%] grayscale"
          />
        </div>
        <HomepageHero />
        <div className="relative">
         <Brand />
        </div>
      </div>
    </main>
  );
}
