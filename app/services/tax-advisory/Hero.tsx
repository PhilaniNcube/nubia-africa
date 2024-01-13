import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Tax Advisory Services
          </h1>
          <p className="text-md md:text-lg leading-8 mt-4">
            We offer advise on complex tax issues, such as international
            taxation, mergers and acquisitions, and other strategic financial
            decisions that have tax implications. We also advise on the tax
            implications of various investment decisions, including the purchase
            or sale of assets, investments in securities, and other financial
            activities.
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
            src="/images/advisory.png"
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
