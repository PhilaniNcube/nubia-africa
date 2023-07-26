import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Tax Preparation
          </h1>
          <p className="text-md md:text-lg leading-8 max-w-[35ch] mt-4">
            Expert Tax Preparation Services for Individuals, Businesses, and
            Trusts
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
            src="/images/tax.webp"
            width={1280}
            height={853}
            alt="Bookkeeping"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
