import Image from 'next/image';

const Brand = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="col-span-1 flex flex-col justify-center items-start pr-5">
          <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-md md:text-lg text-gray-700 font-sans">
            Our mission is to assist our clients to optimize their compliance
            status and support them in adopting statutory requirements in the
            accounting and taxation regulatory landscape.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 rounded-lg overflow-hidden">
          <Image
            src="/images/client.jpg"
            width={1920}
            height={1280}
            alt="Mission"
            className="grayscale w-full object-cover md:aspect-[3/2] aspect-[3/1] lg:aspect-[3/1]"
          />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        <div className="col-span-1 lg:col-span-2 rounded-lg overflow-hidden">
          <Image
            src="/images/success.jpg"
            width={1920}
            height={1280}
            alt="Mission"
            className="grayscale w-full object-cover md:aspect-[3/2] aspect-[3/1] lg:aspect-[3/1]"
          />
        </div>{" "}
        <div className="col-span-1 flex flex-col justify-center items-start pr-5">
          <h2 className="text-4xl font-bold text-gray-900">Brand Promise</h2>
          <p className="text-md md:text-lg text-gray-700 font-sans">
            Our brand promise is to understand and meet our clients&apos; needs.
            Our enduring strength is being a trusted brand that is capable of
            serving clients&apos; needs on a budget.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Brand;
