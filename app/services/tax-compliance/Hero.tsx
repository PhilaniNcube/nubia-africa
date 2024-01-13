import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold uppercase">Tax Compliance</h1>
          <p className="text-md mt-4">
            We assist businesses and individuals in meeting their tax compliance
            obligations. Our team helps clients understand and fulfil their tax
            filing requirements, including preparing and filing various tax
            forms, such as income tax returns, VAT returns, payroll tax returns,
            and more.
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
            className="grayscale w-full object-cover aspect-[4/2]"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
