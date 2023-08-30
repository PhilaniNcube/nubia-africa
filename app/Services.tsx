import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Accounting and Bookkeeping",
    href: "accounting-and-bookkeeping",
    image: "/images/bookkeeping.webp",
    tags: [
      "We offer a full range of accounting and bookkeeping services, including financial statement preparation, general ledger maintenance, accounts payable and receivable management, payroll processing, and bank reconciliation.",
    ],
  },
  {
    id: 2,
    title: "Tax Planning",
    href: "tax-planning",
    image: "/images/money.jpg",
    tags: [
      "We provide strategic tax planning services to help businesses and individuals minimize tax liabilities and optimize their tax positions. Our team identifies tax-saving opportunities and develops customized plans that align with our clients' financial objectives. Our team of tax experts stays up-to-date with the latest tax laws, regulations, and incentives to provide accurate and effective tax planning strategies. We conduct comprehensive tax reviews to identify potential tax-saving opportunities ",
    ],
  },
  {
    id: 3,
    title: "Tax Preparation",
    href: "tax-preparation",
    image: "/images/tax-forms.jpg",
    tags: [
      "Our tax professionals are well-versed in tax laws and regulations. We offer comprehensive tax preparation services, ensuring accurate and timely filing of tax returns for individuals, businesses, and trusts. We stay updated on the latest tax code changes to ensure compliance.",
    ],
  },
  {
    id: 4,
    title: "Tax Compliance",
    href: "tax-compliance",
    image: "/images/income.jpg",
    tags: [
      "We assist businesses and individuals in meeting their tax compliance obligations. Our team helps clients understand and fulfil their tax filing requirements, including preparing and filing various tax forms, such as income tax returns, VAT returns, payroll tax returns, and more.",
    ],
  },
  {
    id: 4,
    title: "Tax Dispute Resolution",
    href: "tax-dispute-resolution",
    image: "/images/docs.jpg",
    tags: [
      "In the event of tax disputes or audits, our experienced tax advisors provide expert representation and guidance. Our experienced professionals provide effective representation and advocacy for our clients. We work closely with tax authorities to resolve controversies, minimize penalties, and protect our clients' rights, striving for fair and favourable outcomes in tax dispute resolutions.",
    ],
  },
];

const Services = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="w-full bg-slate-100 "
          >
            <CardHeader>
              <Image
                src={service.image}
                width={1920}
                height={1280}
                alt={service.title}
                className="object-cover w-full aspect-video"
              />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {service.tags.map((tag, idx) => (
                <CardDescription className="line-clamp-4" key={idx}>
                  {tag}
                </CardDescription>
              ))}
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.href}`}>
                <Button
                  type="button"
                  className="px-4 py-2 font-bold text-white bg-black rounded-none hover:bg-slate-800"
                >
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Services;
