import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Accounting and Bookkeeping
          </h1>
          <p className="text-md md:text-lg leading-8 max-w-[35ch] mt-4">
            Accounting and Bookkeeping Services for Businesses of All Sizes
          </p>
          <Link href="/contact">
            <Button
              type="button"
              className="bg-black rounded-none text-xl mt-4"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
        <div className="w-full">
          <Image
            src="/images/bookkeeping.webp"
            width={1920}
            height={1131}
            alt="Bookkeeping"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;