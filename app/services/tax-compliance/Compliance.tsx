import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Compliance = () => {
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
            <div className="w-1/3 h-1/4 bottom-0 right-0 flex items-center p-3 bg-white absolute">
              <p className="text-xs md:text-md lg:text-lg font-semibold text-slate-700">
                We offer a full range of services
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center p-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">
              Fulfilling Your Tax Obligations with Confidence
            </h2>
            <p className="text-white text-sm md:text-md font-medium">
              We understand the complexity of tax regulations and the importance
              of meeting your tax compliance obligations. Our team of experts is
              here to assist both businesses and individuals in understanding
              and fulfilling their tax filing requirements.
            </p>
            <p className="text-white text-sm md:text-md font-medium mt-2">
              Tax compliance can be a daunting task, especially with the
              ever-changing tax laws and regulations. That&apos;s where we come
              in. Our dedicated professionals stay up-to-date with the latest
              tax legislation, ensuring that you never miss a deadline and stay
              in full compliance with all necessary tax filings.
            </p>
            <p className="text-white text-sm md:text-md font-medium mt-2">
              Whether you are a business owner or an individual, our team will
              work closely with you to analyze your tax situation, identify
              potential opportunities for tax savings, and develop a
              personalized tax compliance plan that meets your specific needs.
              We specialize in preparing and filing various tax forms, including
              income tax returns, VAT returns, payroll tax returns, and more.
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
export default Compliance;
