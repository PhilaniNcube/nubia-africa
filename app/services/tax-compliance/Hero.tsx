import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
			<section className="container py-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold uppercase">Tax Compliance</h1>
						<p className="mt-4 text-md">
							We assist businesses and individuals in meeting their tax
							compliance obligations. Our team helps clients understand and
							fulfil their tax filing requirements, including preparing and
							filing various returns.
						</p>
						<ul className="mt-4 list-disc text-md">
							<li>
								Assistance with tax registration for individuals, businesses,
								and entities required to register for various taxes, including
								income tax, value-added tax (VAT), pay-as-you-earn (PAYE)
								withholding tax, capital gains tax (CGT), and others.
							</li>
							<li>
								Preparation and filing of tax returns for individuals,
								companies, trusts, partnerships, and other entities, ensuring
								accurate reporting of income, expenses, deductions, credits, and
								other relevant tax items in compliance with South African tax
								legislation.
							</li>
							<li>
								Assistance with VAT compliance, including VAT registration, VAT
								return preparation and filing, VAT reconciliation, compliance
								reviews, and guidance on VAT-related matters such as input tax
								claims, VAT exemptions, and VAT treatment of specific
								transactions.
							</li>
							<li>
								We provide support with PAYE compliance obligations, including
								registration as an employer, payroll tax calculations, employee
								tax deductions, PAYE return filing, compliance with PAYE
								withholding requirements, and handling PAYE audits or inquiries
								from tax authorities.
							</li>
							<li>
								Preparation and filing of corporate income tax returns (ITR14),
								including the preparation and filing of individual income tax
								returns (ITR12), computation of taxable income, determination of
								corporate tax liabilities, compliance with corporate tax laws,
								rules, and regulations.
							</li>
						</ul>
						<Link href="/contact">
							<Button
								type="button"
								className="mt-4 text-xl bg-black rounded-none"
							>
								Get In Touch
							</Button>
						</Link>
					</div>
					<div className="w-full">
						<Image
							src="/images/tax.webp"
							width={1280}
							height={853}
							alt="Bookkeeping"
							className="grayscale w-full object-cover aspect-[4/2]"
						/>
					</div>
				</div>
			</section>
		);
};
export default Hero;
