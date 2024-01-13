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
          <p className="text-md md:text-lg leading-8 mt-4">
            Our tax professionals are well-versed in tax laws and regulations.
            We offer comprehensive tax preparation services, ensuring accurate
            and timely filing of tax returns for individuals, businesses, and
            trusts. We stay updated on the latest tax code changes to ensure
            compliance.
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
