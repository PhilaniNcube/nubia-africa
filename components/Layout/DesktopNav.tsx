"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import {motion} from "framer-motion"

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
  },
];

const DesktopNav = () => {

  const [activeTab, setActiveTab] = useState(links[0].id)

  return (
    <div>
      <div className="justify-between hidden bg-white md:flex">
        <Link href="/">
          <Image
            onClick={() => setActiveTab(1)}
            src="/images/logo-cropped.svg"
            width={328.82}
            height={323.15}
            alt="Logo"
            className="object-cover w-16"
          />
        </Link>

        <ul className="flex items-center space-x-3 ">
          {links.map((link) => (
            <Link
              onClick={() => setActiveTab(link.id)}
              key={link.id}
              href={link.href}
              className={`${
                activeTab === link.id ? "" : "hover:text-neutral-700/50"
              } rounded-full px-3 py-1.5 text-black  text-sm font-medium font-mono outline-2 outline-sky-400 focus-visible:outline relative transition`}
            >
              {activeTab === link.id && (
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
