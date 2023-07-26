import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Bookkeeping from "./Bookkeeping";

const page = () => {
  return (
    <main>
      <Hero />
      <Bookkeeping />
    </main>
  );
};
export default page;
