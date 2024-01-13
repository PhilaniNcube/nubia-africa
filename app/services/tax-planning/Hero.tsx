import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Tax Planning
          </h1>
          <p className="text-md md:text-lg leading-8 mt-4">
            We provide strategic tax planning services to help businesses and
            individuals minimize tax liabilities and optimize their tax
            positions. Our team identifies tax-saving opportunities and develops
            customized plans that align with our clients&#39; financial
            objectives. Our team of tax experts stays up-to-date with the latest
            tax laws, regulations, and incentives to provide accurate and
            effective tax planning strategies. We conduct comprehensive tax
            reviews to identify potential tax-saving opportunities
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
            className="grayscale w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
