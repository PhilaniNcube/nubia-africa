import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';

const services = [
  {
    name: "Accounting & Bookkeeping",
    description:
      "We provide accounting and bookkeeping services to help you stay organized and compliant with tax laws. We can handle all of your financial recordkeeping, from entering transactions to preparing financial statements.",
  },
  {
    name: "Tax Planning",
    description:
      "We help you develop a tax plan that meets your specific financial goals. We can help you identify tax deductions and credits that you may be eligible for, and we can help you structure your investments to minimize your tax liability.",
  },
  {
    name: "Tax Preparation",
    description:
      "We prepare your tax returns accurately and on time, so you can be confident that you are in compliance with the law. We can also help you file for extensions and resolve any tax issues that may arise.",
  },
  {
    name: "Tax Compliance",
    description:
      "We help you stay compliant with tax laws by reviewing your financial records and ensuring that you are filing all of the required returns. We can also help you identify and correct any errors that may have been made in your past tax returns.",
  },
  {
    name: "Tax Dispute Resolution",
    description:
      "If you have a tax dispute with the SARS, we can help you represent your case. We have experience negotiating with the SARS and we can help you get the best possible outcome.",
  },
];

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen py-8 overflow-clip bg-slate-200 isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/africa.svg"
          width={1920}
          height={1080}
          alt="Watermark"
          className="h-full opacity-60 scale-80 lg:translate-x-[300px] object-cover"
        />
      </div>
      <section className="container relative py-6 rounded-md shadow-md bg-white/80 overflow-clip">
        {/* <h2 className="hidden lg:flex lg:absolute top-10 left-0 uppercase font-extrabold text-slate-400 text-6xl -rotate-90 -translate-x-[100px] translate-y-[100px] lg:translate-y-[340px]">
        Nubia{" "}
      </h2> */}

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 h-9/10">
          <div className="container relative z-20 flex flex-col items-start justify-center w-full text-black">
            <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
              Your partner in compliance
            </h1>

            <Link href="/contact">
              <Button className="mt-3 text-xs tracking-wider uppercase bg-black rounded-none md:text-md font-raleway w-fit">
                Get a free consultation today!
              </Button>
            </Link>
          </div>{" "}
          <div className="flex justify-center">
            {" "}
            <div className="relative w-full overflow-clip">
              <Image
                width="1280"
                height="1600"
                src="/images/people.jpg"
                alt="people"
                className="object-cover w-full grayscale hero-image"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 -translate-y-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <div key={index} className="w-full px-2 py-5 bg-white rounded shadow">
              <h3 className="mb-2 font-bold text-md">{service.name}</h3>
              <p className="text-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Hero;
