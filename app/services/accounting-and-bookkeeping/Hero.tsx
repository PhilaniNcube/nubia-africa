import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold uppercase">
            Accounting and Bookkeeping
          </h1>
          <p className="text-md mt-4">
            We offer a full range of accounting and bookkeeping services,
            including financial statement preparation, general ledger
            maintenance, accounts payable and receivable management, payroll
            processing, and bank reconciliation.
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
            className="grayscale w-full object-cover aspect-[4/2]"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
