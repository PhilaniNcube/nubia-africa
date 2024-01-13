import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Preparation = () => {
  return (
    <section className="mt-5 bg-black">
      <div className="container py-10 md:py-16 lg:py-28">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
          <div className="w-full grid grid-cols-5 grid-rows-3 relative">
            <div className="col-span-4 row-span-3">
              <Image
                src="/images/sky.webp"
                width={954}
                height={1280}
                alt="Sky"
                className="w-full object-cover grayscale"
              />
            </div>
            <div className="w-1/3 h-1/4 bottom-0 right-0 flex items-center p-3 bg-slate-600 absolute">
              <p className="text-xs md:text-md lg:text-lg font-semibold text-white">
                We offer a full range of services
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center p-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">
              Minimize your tax liability while remaining fully compliant with
              tax laws
            </h2>
            <p className="text-white text-sm md:text-md font-medium">
              Whether you are an individual taxpayer, a small business owner, or
              have a complex trust structure in place, our experts will work
              closely with you to gather the necessary financial information,
              analyze your tax situation, and maximize your deductions. We are
              dedicated to helping you minimize your tax liability while
              remaining fully compliant with tax laws.
            </p>
            <p className="text-white text-sm md:text-md font-medium mt-2">
              Our team of highly skilled tax professionals has in-depth
              knowledge of the ever-changing tax codes and stays up-to-date with
              the latest regulations. We offer comprehensive tax preparation
              services for individuals, businesses, and trusts, ensuring
              accurate and timely filing of tax returns.
            </p>

            <Link href="/contact">
              <Button
                type="button"
                className="bg-white text-black rounded-none mt-3 text-lg"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Preparation;
