import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Advisory = () => {
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
            <p className="text-white text-sm md:text-md font-medium">
              Our tax advisory services are designed to provide individuals and
              businesses with expertise and guidance in navigating the
              ever-changing landscape of tax laws and regulations. We understand
              the complexities involved in tax planning and aim to help our
              clients make informed and strategic financial decisions.
            </p>
            <p className="text-white text-sm md:text-md font-medium mt-2">
              One area of expertise lies in international taxation. With
              globalization, businesses are engaging in cross-border activities
              more than ever before. Our tax advisors are well-versed in the
              intricacies of international tax laws, ensuring that our clients
              remain compliant and take advantage of any available tax benefits.
              We assist with matters such as transfer pricing, foreign tax
              credit optimization, and structuring of cross-border transactions
              to minimize tax liabilities.
            </p>
            <p className="text-white text-sm md:text-md font-medium mt-2">
              Investment decisions, particularly those involving significant
              financial activities, can have implications for an individual or
              business&apos;s tax liabilities. Our tax advisory services also
              extend to assisting clients
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
export default Advisory;
