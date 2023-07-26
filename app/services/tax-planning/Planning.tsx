import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Bookkeeping = () => {
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
            <h2 className="text-white text-lg md:text-xl font-medium">
              Do you need help with the day-to-day financial management of your
              business? Our accounting and bookkeeping services can help you
              stay on top of your finances, so you can focus on what you do
              best.
            </h2>
            <p className="text-md mt-4 text-white">
              We offer a full range of services, including:
            </p>
            <ol className="list-disc list-inside text-white text-xs md:text-sm">
              <li>Financial statement preparation</li>
              <li>General ledger maintenance</li>
              <li>Accounts payable and receivable management</li>
              <li>Payroll processing</li>
              <li>Bank reconciliation</li>
            </ol>
            <Link href="/contact">
              <Button type="button" className="bg-white text-black rounded-none mt-3 text-lg">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bookkeeping;
