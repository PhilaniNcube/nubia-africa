import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
			<section className="container py-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold uppercase">Tax Planning</h1>
						<p className="mt-4 text-md">
							Our services involve a range of strategies and actions aimed at
							minimizing your tax liabilities. We assist businesses and
							individuals minimize tax liabilities and optimize their tax
							positions while remaining compliant with relevant laws and
							regulations. Our team identifies tax-saving opportunities and
							develops customized plans that align with our clients&#39;
							financial objectives. We review your financial records, including
							income statements, expenses, investments, and any relevant
							documentation, assess your current tax situation to identify
							potential areas for improvement and ensure compliance with tax
							laws. We devise strategies to reduce taxable income through
							deductions, credits, deferrals, and other tax-saving methods
						</p>
						<p className="mt-4 text-md">
							Our team of tax experts stays up-to-date with the latest tax laws,
							regulations, and incentives to provide accurate and effective tax
							planning strategies. We conduct comprehensive tax reviews to
							identify potential tax-saving opportunities
						</p>
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
