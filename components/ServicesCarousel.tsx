"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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
    id: 5,
    title: "Tax Dispute Resolution",
    href: "tax-dispute-resolution",
    image: "/images/docs.jpg",
    tags: [
      "In the event of tax disputes or audits, our experienced tax advisors provide expert representation and guidance. Our experienced professionals provide effective representation and advocacy for our clients. We work closely with tax authorities to resolve controversies, minimize penalties, and protect our clients' rights, striving for fair and favourable outcomes in tax dispute resolutions.",
    ],
  },
  {
    id: 5,
    title: "Tax Advisory Services",
    href: "tax-advisory",
    image: "/images/advisory.png",
    tags: [
      "We offer advice on complex tax issues, such as international taxation, mergers and acquisitions, and other strategic financial decisions that have tax implications. We also advise on the tax implications of various investment decisions, including the purchase or sale of assets, investments in securities, and other financial activities.",
    ],
  },
];

export function ServicesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
			<Carousel
				plugins={[plugin.current]}
				className="relative pt-10 mx-auto "
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent className="w-full">
					{services.map((service, index) => (
						<CarouselItem
							key={service.id}
							className="w-full md:basis-1/2 lg:basis-1/3"
						>
							<div className="p-1">
								<Card className="bg-transparent border-none">
									<div className="bg-black/50">
										<Image
											src={service.image}
											width={1920}
											height={1280}
											alt={service.title}
											className="object-cover w-full aspect-video grayscale mix-blend-multiply"
										/>
									</div>
									<CardTitle className="py-2">{service.title}</CardTitle>
									<span className="mb-2 text-sm font-medium text-black line-clamp-2">
										{service.tags}
									</span>
									<Link href={`/services/${service.href}`} className="">
										<Button
											variant="outline"
											type="button"
											className="px-4 py-2 mt-4 font-bold text-white bg-black rounded-none hover:bg-slate-800 hover:text-white"
										>
											Read More
										</Button>
									</Link>

								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		);
}
