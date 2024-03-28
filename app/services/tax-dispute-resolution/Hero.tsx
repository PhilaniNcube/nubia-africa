import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
			<section className="container py-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold uppercase">
							Tax Controversy Resolution:
						</h1>
						<p className="mt-4 text-md">
							In the event of tax disputes or audits, our experienced tax
							advisors provide expert representation and guidance. Our
							experienced professionals provide effective representation and
							advocacy for our clients. We work closely with tax authorities to
							resolve controversies, minimize penalties, and protect our
							clients&#39; rights, striving for fair and favourable outcomes in
							tax dispute resolutions.
						</p>
						<p className="mt-4 text-md">
							Our tax controversy services include providing assistance and
							representation to individuals or businesses involved in disputes
							or controversies the South African Revenue Service (SARS). We
							provide support during tax audits; this involves helping clients
							gather relevant documentation, preparing responses to audit
							inquiries, and representing them during meetings with tax
							auditors. Tax controversy services can involve disputing the tax
							assessment or audit findings. This may include filing formal
							objections, alternative dispute resolutions, remediation of
							penalties, filing complaints, suspension of payments and
							negotiating tax debt with tax authorities. In cases where tax
							disputes escalate to litigation, tax controversy specialists such
							as tax attorneys may be referred. Nubia Associates also assists in
							voluntary disclosure applications and may be involved in providing
							litigation support.
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
