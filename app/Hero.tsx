import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="container relative grid grid-cols-1 lg:grid-cols-2">
      <h2 className="hidden lg:flex lg:absolute top-10 left-0 uppercase font-extrabold text-slate-400 text-6xl -rotate-90 -translate-x-[100px] translate-y-[100px] lg:translate-y-[340px]">
        Nubia{" "}
      </h2>
      <div className="container relative flex flex-col items-start justify-center w-full text-black">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Your Partner in Financial Success
        </h1>

        <Link href="/contact">
          <Button className="mt-3 font-mono uppercase bg-black w-fit rounded-none">
            Get a free consultation today!
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="relative w-full overflow-clip">
          <Image
            width="1280"
            height="1600"
            src="/images/people.jpg"
            alt="people"
            className="object-cover w-full grayscale hero-image"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
