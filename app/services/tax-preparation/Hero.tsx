import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
			<section className="container py-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold uppercase">Tax Preparation</h1>
						<p className="mt-4 text-md">
							We assist individuals and businesses to effectively prepare for
							regulatory amendments affecting taxation, ensuring compliance with
							the new rules and optimizing their tax positions in alignment with
							the revised framework.
						</p>
						<p className="mt-4 text-md">
							Our tax professionals are well-versed in tax laws and regulations.
							We stay updated on the latest tax code changes to ensure
							compliance and keep abreast of regulatory changes by monitoring
							official announcements, updates from tax authorities, and guidance
							from professional associations or advisors. This ensures timely
							awareness of changes that may impact your tax obligations or
							opportunities. Evaluate the implications of regulatory amendments
							on your tax situation. Determine how the changes affect your
							income, deductions, credits, tax rates, compliance requirements,
							and overall tax liabilities.
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
