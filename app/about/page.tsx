import Image from "next/image";

const approach = [
  {
    title: "Client-Centric",
    description:
      "We prioritize building long-term relationships with our clients and providing personalized attention to their unique tax needs.",
    image: "/images/consult.jpg",
  },
  {
    title: "Expertise",
    description:
      "Our team consists of highly skilled tax professionals with extensive knowledge of tax laws and regulations.",
    image: "/images/expert.jpg",
  },
  {
    title: "Proactive Strategies",
    description:
      "We stay up to date with the latest tax developments and proactively identify opportunities to minimize tax burdens and maximize savings.",
    image: "/images/strategy.jpg",
  },
  {
    title: "Compliance and Accuracy",
    description:
      "We emphasize accuracy and compliance in all our tax services, ensuring that our clients meet their tax obligations while minimizing the risk of penalties and audits.",
    image: "/images/accuracy.jpg",
  },
];

const select = [
  {
    title: "Personalized",
    description:
      "We understand that each client has unique tax needs and goals, so we provide tailored solutions and one-on-one attention.",
    image: "/images/personal.jpg",
  },
  {
    title: "Accuracy and Compliance",
    description:
      "We adhere to the highest standards of accuracy and compliance, ensuring that our clients meet their tax obligations while optimizing their tax positions.",
    image: "/images/tax-return.jpg",
  },
  {
    title: "Proactive Guidance",
    description:
      "We keep a close eye on tax developments and proactively advise our clients on tax law changes and opportunities that may affect them.",
    image: "/images/docs.jpg",
  },
  {
    title: "Confidentiality and Integrity",
    description:
      "We handle all client information with the utmost confidentiality and maintain the highest ethical standards in our operations.",
    image: "/images/locked.jpg",
  },
];

const page = () => {
  return (
    <div className="container py-10">
      <div className="relative flex items-center justify-center w-full h-[70vh] isolate bg-blue-200/80">
        <h1 className="text-[4rem] md:text-[6rem] translate-x-16 lg:text-[8rem] relative z-10 text-white font-extrabold uppercase">
          About Us
        </h1>
        <Image
          src="/images/tax.jpg"
          className="absolute inset-0 object-cover w-full h-full grayscale aspect-video"
          width={1280}
          height={853}
          alt="image"
        />
      </div>
      <section className="w-full mt-6">
        <h2 className="mt-4 mb-1 text-3xl font-extrabold uppercase">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, index) => (
            <div key={index} className="w-full">
              <Image
                src={item.image}
                width={1920}
                height={1080}
                alt={item.title}
                className="grayscale"
              />
              <p className="mt-2 text-sm">
                <strong className="text-lg">{item.title} </strong> <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full mt-10">
        <h2 className="mt-4 mb-1 text-3xl font-extrabold uppercase">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {select.map((item, index) => (
            <div className="w-full" key={index}>
              <Image
                src={item.image}
                width={1920}
                height={1080}
                alt="Clients"
                className="grayscale"
              />
              <p className="mt-2 text-sm">
                <strong className="text-lg">{item.title} </strong> <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default page;
