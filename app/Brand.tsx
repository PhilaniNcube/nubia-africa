"use client"

import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon, Info } from "lucide-react";
import { useState } from "react";

export default function Brand() {

  const [collapsed, setCollapsed] = useState(true);


  return (
			<div className="container text-black">
				<div className="grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:pb-20">
					<div className="flex flex-col items-start justify-start ">
						<h2 className="mb-3 text-xl font-semibold text-black ">About Us</h2>
						<p
							className={cn(
								"text-sm font-medium text-black",
								collapsed ? "line-clamp-3" : "",
							)}
						>
							Nubia Associates is a Level-1 Contributor to the B-BBEE Scorecard.
							A black female- owned professional services company, Nubia
							Associates provides integrated accounting and tax services. With a
							team of experienced accountants and tax professionals, and a
							commitment to excellence, we strive to assist our clients in
							navigating the complex and ever-changing accounting and tax
							landscape, ensuring compliance with accountings standards and tax
							laws and to be a trusted partner in our clients&#39; financial
							success.
						</p>
						<div className="flex items-center mt-3 space-x-3 text-sm">
							{collapsed ? (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read more
									<ChevronDownIcon size={16} />
								</span>
							) : (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read less
									<ChevronUpIcon size={16} />
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-col items-start justify-start ">
						<h2 className="mb-3 text-xl font-semibold text-black">Mission</h2>
						<p
							className={cn(
								"text-sm font-medium text-black",
								collapsed ? "line-clamp-3" : "",
							)}
						>
							Our mission is to assist our clients to optimize their compliance
							status and support them in adopting statutory requirements in the
							accounting and taxation regulatory landscape. We pride ourselves
							on our commitment to delivering exceptional service and building
							long-term relationships with our clients based on trust,
							integrity, and confidentiality.
						</p>
						<div className="flex items-center mt-3 space-x-3 text-sm">
							{collapsed ? (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read more
									<ChevronDownIcon size={16} />
								</span>
							) : (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read less
									<ChevronUpIcon size={16} />
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-col items-start justify-start ">
						<h2 className="mb-3 text-xl font-semibold text-black">
							Brand Promise
						</h2>
						<p
							className={cn(
								"text-sm font-medium text-black",
								collapsed ? "line-clamp-3" : "",
							)}
						>
							Our brand promise is to understand and meet our clients&apos;
							needs. Our enduring strength is being a trusted brand that is
							capable of serving clients&apos; needs.
						</p>
						<div className="flex items-center mt-3 space-x-3 text-sm">
							{collapsed ? (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read more
									<ChevronDownIcon size={16} />
								</span>
							) : (
								<span
									className="flex items-center space-x-3 text-sm"
									onClick={() => setCollapsed(!collapsed)}
									onKeyDown={() => setCollapsed(!collapsed)}
								>
									Read less
									<ChevronUpIcon size={16} />
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		);
}
