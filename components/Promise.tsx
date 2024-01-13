"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

const Promise = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900">Brand Promise</h2>
      <p
        className={cn(
          "font-medium text-gray-700 text-sm transition-all duration-300 lg:text-md ",
          isOpen ? "line-clamp-none max-h-fit" : "line-clamp-1 max-h-4"
        )}
      >
        Our brand promise is to understand and meet our clients&apos; needs. Our
        enduring strength is being a trusted brand that is capable of serving
        clients&apos; needs.
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
export default Promise;
