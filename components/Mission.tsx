"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

const Mission = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
      <p
        className={cn(
          "font-medium text-gray-700 text-sm lg:text-md transition-all duration-300",
          isOpen ? "line-clamp-none max-h-fit" : "line-clamp-1 max-h-4"
        )}
      >
        Our mission is to assist our clients to optimize their compliance status
        and support them in adopting statutory requirements in the accounting
        and taxation regulatory landscape. We pride ourselves on our commitment
        to delivering exceptional service and building long-term relationships
        with our clients based on trust, integrity, and confidentiality.
      </p>
      <Button
        className="font-medium hover:text-sky-700/50 mt-3 text-white transition-all duration-300 rounded-none"
        onClick={() => setOpen(!isOpen)}
      >
        Read More
      </Button>
    </div>
  );
};
export default Mission;
