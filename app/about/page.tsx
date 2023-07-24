import Image from "next/image";

const page = () => {
  return (
    <div className="container py-10">
      <div className="relative flex items-center justify-center w-full h-[70vh] isolate bg-blue-200/80">
        <h1 className="text-[4rem] md:text-[6rem] translate-x-16 lg:text-[8rem] relative z-10 text-black font-extrabold uppercase mix-blend-multiply ">
          About Us
        </h1>
        <Image
          src="/images/building.jpg"
          className="absolute inset-0 object-cover w-full h-full grayscale aspect-video"
          width={1920}
          height={1280}
          alt="image"
        />
      </div>
      <section className="w-full mt-6">
        <h2 className="mt-4 mb-1 text-3xl font-extrabold uppercase">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="w-full">
            <Image
              src="/images/consult.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Client-Centric:</strong> We prioritize building long-term
              relationships with our clients and providing personalized
              attention to their unique tax needs.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/expert.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Expertise:</strong>Our team consists of highly skilled tax
              professionals with extensive knowledge of tax laws and
              regulations.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/strategy.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Proactive Strategies:</strong> We stay up to date with the
              latest tax developments and proactively identify opportunities to
              minimize tax burdens and maximize savings.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/accuracy.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Compliance and Accuracy:</strong> We emphasize accuracy
              and compliance in all our tax services, ensuring that our clients
              meet their tax obligations while minimizing the risk of penalties
              and audits.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-10">
        <h2 className="mt-4 mb-1 text-3xl font-extrabold uppercase">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="w-full">
            <Image
              src="/images/personal.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Personalized:</strong> We understand that each client has
              unique tax needs and goals, so we provide tailored solutions and
              one-on-one attention.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/compliance.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Accuracy and Compliance:</strong> We adhere to the highest
              standards of accuracy and compliance, ensuring that our clients
              meet their tax obligations while optimizing their tax positions.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/guide.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Proactive Guidance:</strong> We keep a close eye on tax
              developments and proactively advise our clients on tax law changes
              and opportunities that may affect them.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/secret.jpg"
              width={1920}
              height={1080}
              alt="Clients"
            />
            <p className="mt-2 text-sm">
              <strong>Confidentiality and Integrity:</strong> We handle all
              client information with the utmost confidentiality and maintain
              the highest ethical standards in our operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
