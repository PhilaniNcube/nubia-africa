"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import About from '@/components/About';
import Mission from '@/components/Mission';
import Promise from '@/components/Promise';


const Hero = () => {
  return (
    <div className="relative w-full py-8 lg:pt-16 overflow-clip bg-slate-50">
      <div className="absolute inset-0 ">
        <div className="container py-10">
          <Image
            src="/images/africa.svg"
            width={1920}
            height={1080}
            alt="Watermark"
            className="w-[400px] xl:-translate-y-[230px] lg:-translate-y-[170px] opacity-70  lg:translate-x-[530px] xl:translate-x-[450px] xl:w-[85%] scale-75 object-cover"
          />
        </div>
      </div>
      <section className="container relative h-[80vh] py-6 rounded-md shadow-md bg-white/80 overflow-clip">
        <div className="flex flex-col h-full gap-4 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full text-black lg:-translate-y-8">
            <div className="grid grid-cols-1 gap-3">
              <About />
              <Mission />
              <Promise />
            </div>
          </div>{" "}
          <div className="items-center justify-end hidden w-full px-10 lg:flex overflow-clip">
            <Image
              width="1024"
              height="1024"
              src="/images/Africa.webp"
              alt="people"
              className="object-cover w-full lg:scale-90 grayscale aspect-square"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
