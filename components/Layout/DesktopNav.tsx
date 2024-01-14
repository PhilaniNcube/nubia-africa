"use client"
import Image from "next/image"
import Link from "next/link";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";
import { raleway } from "@/fonts";


const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },

  {
    id: 2,
    name: "Our Services",
    href: "/services",
  },
  {
    id: 3,
    name: "Our Approach",
    href: "/our-approach",
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
  },
];

const DesktopNav = () => {

 const pathname = usePathname();


  return (
    <div className={raleway.className}>
      <div className="justify-between hidden bg-white md:flex">
        <Link href="/" className="relative flex">
          <Image
            src="/images/logo-cropped.svg"
            width={328.82}
            height={323.15}
            alt="Logo"
            className="object-cover w-20 relative mix-blend-normal"
          />

        </Link>

        <ul className="flex items-center space-x-3 ">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`${
                pathname === link.href ? "" : "hover:text-neutral-700/50"
              } rounded-full px-3 py-1.5 text-black  text-sm font-medium font-raleway outline-2 outline-sky-400 focus-visible:outline relative transition`}
            >
              {pathname === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black"
                  // transition={{ duration: 3 }}
                  style={{ borderRadius: 9999 }}
                />
              )}

              <span className="relative z-10 tracking-wide text-white mix-blend-exclusion">
                {link.name}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DesktopNav;
