"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

const About = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
      <p
        className={cn(
          "font-medium text-gray-700 text-sm transition-all duration-300 lg:text-md",
          isOpen ? "line-clamp-none max-h-fit" : "line-clamp-1 max-h-4"
        )}
      >
        Nubia Associates is an accounting and tax advisory firm specializing in
        providing comprehensive accounting and tax services to individuals and
        businesses. With a team of experienced accountants and tax
        professionals, we aim to assist our clients in navigating the complex
        and ever-changing accounting and tax landscape, ensuring compliance with
        accountings standards and tax laws and maximizing tax savings
        opportunities.
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
export default About;
