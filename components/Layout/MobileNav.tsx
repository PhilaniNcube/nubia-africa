"use client"
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex md:hidden">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-cropped.svg"
            width={328.82}
            height={323.15}
            alt="Logo"
            className="object-cover w-16"
          />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col items-start gap-4">
                  <li onClick={() => setOpen(false)}>
                    <Link href="/">Home</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/services">Services</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/our-approach">Our Approach</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default MobileNav;
