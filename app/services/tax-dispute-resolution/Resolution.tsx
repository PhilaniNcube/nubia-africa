import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Resolution = () => {
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
                className="w-full object-cover"
              />
            </div>
            <div className="w-1/3 h-1/4 bottom-0 right-0 flex items-center p-3 bg-blue-600 absolute">
              <p className="text-xs md:text-md lg:text-lg font-semibold text-white">
                We offer a full range of services
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center p-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">
              Working towards fair and favorable outcomes.
            </h2>
            <p className="text-white text-sm md:text-md font-medium">
              Tax disputes or audits can be stressful and time-consuming, with
              potential financial implications for individuals and businesses
              alike. That&apos;s where our experienced tax advisors step in. With our
              in-depth knowledge of tax laws and regulations, we can effectively
              represent and advocate for our clients during tax disputes,
              working towards fair and favorable outcomes.
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
export default Resolution;
