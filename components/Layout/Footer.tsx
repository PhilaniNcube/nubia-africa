/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GOanddBkwzi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { FlagIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="px-4 py-6 text-white bg-black md:px-6">
			<div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
				<div className="flex items-center space-x-6 md:order-2">
					<Link href="/contact">
						Get In Touch
					</Link>
					<div className="flex space-x-4">
					  <p className="text-white">&copy; Nubia Associates {new Date().getFullYear()} </p>
					</div>
				</div>
				<nav className="flex mt-4 space-x-6 md:mt-0 md:order-1">
					<Link className="hover:underline" href="">
						Home
					</Link>
					<Link className="hover:underline" href="/services">
						Services
					</Link>
					<Link className="hover:underline" href="/our-approach">
						Our Approach
					</Link>
				</nav>
			</div>
		</footer>
	);
}



