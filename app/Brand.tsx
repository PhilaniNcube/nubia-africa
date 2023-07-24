import Image from 'next/image';

const Brand = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start justify-center col-span-1 pr-5">
          <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          <p className="font-sans text-gray-700 text-md md:text-lg">
            Our mission is to assist our clients to optimize their compliance
            status and support them in adopting statutory requirements in the
            accounting and taxation regulatory landscape. We pride ourselves on
            our commitment to delivering exceptional service and building
            long-term relationships with our clients based on trust, integrity,
            and confidentiality.
          </p>
        </div>
        <div className="col-span-1 overflow-hidden rounded-lg lg:col-span-2">
          <Image
            src="/images/client.jpg"
            width={1920}
            height={1280}
            alt="Mission"
            className="grayscale w-full object-cover md:aspect-[3/2] aspect-[4/3] "
          />
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 overflow-hidden rounded-lg lg:col-span-2">
          <Image
            src="/images/success.jpg"
            width={1920}
            height={1280}
            alt="Mission"
            className="grayscale w-full object-cover md:aspect-[3/2] aspect-[4/3] "
          />
        </div>{" "}
        <div className="flex flex-col items-start justify-center col-span-1 pr-5">
          <h2 className="text-4xl font-bold text-gray-900">Brand Promise</h2>
          <p className="font-sans text-gray-700 text-md md:text-lg">
            Our brand promise is to understand and meet our clients&apos; needs.
            Our enduring strength is being a trusted brand that is capable of
            serving clients&apos; needs.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Brand;
