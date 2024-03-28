import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
			<section className="container py-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold uppercase">
							Tax Advisory Services
						</h1>
						<p className="mt-4 text-md">
							We offer advice on complex tax issues, such as international
							taxation, mergers and acquisitions, and other strategic financial
							decisions that have tax implications. We also advise on the tax
							implications of various investment decisions, including the
							purchase or sale of assets, investments in securities, and other
							financial activities.
						</p>
						<p className="mt-4 text-md">
							Tax advisory services involve providing written or verbal opinions
							to clients regarding the tax treatment of specific transactions,
							arrangements, or situations. Our tax advisors analyse relevant tax
							laws, regulations, rulings, and judicial precedents to interpret
							their application to a particular transaction or scenario. These
							provide clients with guidance on the tax implications and
							potential consequences based on their interpretation of the law.
							Tax opinion services are valuable for providing clients with
							clarity, certainty, and confidence regarding the tax implications
							of their actions or transactions. By seeking expert opinions from
							our qualified tax advisors, clients can make well-informed
							decisions and manage tax risks effectively. We also provide
							support to taxpayers wishing to obtain a Private Binding Ruling,
							this includes submitting formal applications to SARS, providing
							detailed information about the transaction or arrangement in
							question.
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
							src="/images/advisory.png"
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
