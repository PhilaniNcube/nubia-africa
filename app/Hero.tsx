import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';

const services = [
  {
    name: "Accounting & Bookkeeping",
    description:
      "We provide accounting and bookkeeping services to help you stay organized and compliant with tax laws. We can handle all of your financial recordkeeping, from entering transactions to preparing financial statements.",
    href: "/services/accounting-and-bookkeeping",
  },
  {
    name: "Tax Planning",
    description:
      "We help you develop a tax plan that meets your specific financial goals. We can help you identify tax deductions and credits that you may be eligible for, and we can help you structure your investments to minimize your tax liability.",
    href: "/services/tax-planning",
  },
  {
    name: "Tax Preparation",
    description:
      "We prepare your tax returns accurately and on time, so you can be confident that you are in compliance with the law. We can also help you file for extensions and resolve any tax issues that may arise.",
    href: "/services/tax-preparation",
  },
  {
    name: "Tax Compliance",
    description:
      "We help you stay compliant with tax laws by reviewing your financial records and ensuring that you are filing all of the required returns. We can also help you identify and correct any errors that may have been made in your past tax returns.",
    href: "/services/tax-compliance",
  },
  {
    name: "Tax Dispute Resolution",
    description:
      "If you have a tax dispute with the SARS, we can help you represent your case. We have experience negotiating with the SARS and we can help you get the best possible outcome.",
    href: "/services/tax-dispute-resolution",
  },
];

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="relative w-full py-8 overflow-clip bg-slate-200">
      <div className="absolute inset-0 ">
        <Image
          src="/images/africa.svg"
          width={1920}
          height={1080}
          alt="Watermark"
          className="w-[65%] lg:-translate-y-[200px] opacity-70  lg:translate-x-[600px] object-cover"
        />
      </div>
      <section className="container relative h-[80vh] py-6 rounded-md shadow-md bg-white/80 overflow-clip">
        <div className="flex flex-col h-full gap-4 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full text-black lg:-translate-y-8">
            <h1 className="text-3xl hidden font-bold md:text-5xl lg:text-6xl">
              Your partner in tax compliance
            </h1>

            <Link href="/contact" className="hidden">
              <Button className="mt-3 text-xs tracking-wider uppercase bg-black rounded-none md:text-md font-raleway w-fit">
                Get a free consultation today!
              </Button>
            </Link>
          </div>{" "}
          <div className="hidden lg:flex items-center justify-end w-full px-10 overflow-clip">
            <Image
              width="1024"
              height="1024"
              src="/images/Africa.webp"
              alt="people"
              className="object-cover w-full  grayscale aspect-square"
            />
          </div>
        </div>
        {/* <div className="hidden lg:grid grid-cols-1 gap-4 my-4 -translate-y-[200px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 max-w-[80%]">
          {services.map((service, index) => (
            <div key={index} className="w-full px-2 py-5 rounded shadow-md bg-slate-200/90">
              <h3 className="mb-2 text-sm font-extrabold ">{service.name}</h3>
              <p className="text-xs text-black line-clamp-4 mb-3">{service.description}</p>

              <Link href={service.href} className="font-bold text-xs bg-black hover:bg-slate-900 text-white mt-5 rounded-full px-4 py-2">Read More</Link>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};
export default Hero;
