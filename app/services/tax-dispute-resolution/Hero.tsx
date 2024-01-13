import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Tax Controversy Resolution:
          </h1>
          <p className="text-md md:text-lg leading-8 mt-4">
            In the event of tax disputes or audits, our experienced tax advisors
            provide expert representation and guidance. Our experienced
            professionals provide effective representation and advocacy for our
            clients. We work closely with tax authorities to resolve
            controversies, minimize penalties, and protect our clients&apos;
            rights, striving for fair and favourable outcomes in tax dispute
            resolutions.
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
