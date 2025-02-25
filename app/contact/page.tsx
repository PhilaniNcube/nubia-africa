"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailAction } from "@/lib/actions";
import {
  Loader,
  LucidePhone,
  MailCheckIcon,
  PhoneCallIcon,
  SmartphoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { futura } from "@/fonts";



const ContactPage = () => {
  const [state, formAction, isPending] = useActionState(sendEmailAction, null);

  // use the useEffect hook to show a toast message when the form is submitted
  useEffect(() => {
    if (state?.success) {
      // show a success message
      console.log("Message sent successfully");
      toast("Message sent successfully", {
        duration: 5000,
        description: "We'll get back to you as soon as possible",
        position: "top-center",
      });
    }

    if (state?.error) {
      // show an error message
      console.log("An error occurred while sending the message");
      toast("An error occurred while sending the message", {
        duration: 5000,
        description: "Please try again later",
        position: "top-center",
      });
    }
  }, [state]);

  return (
    <main className={cn("container min-h-[calc(100vh-120px)] py-10", futura.className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="w-full">
          <h1 className="text-4xl font-bold uppercase sr-only lg:text-6xl">
            Contact Us
          </h1>
          {/* <Separator className="my-4" /> */}
          <div className="w-full mt-3">
            <p className={cn("text-lg font-medium", futura.className)}>
              We&apos;re here to help you with all of your tax and accounting
              needs. Whether you&apos;re a small business owner or a large
              corporation, we can provide you with the services you need to
              succeed.
            </p>
            <p className="mt-3 mb-5 text-lg font-medium ">
              Contact us today for a consultation.
            </p>
            <div className="flex items-center my-2 space-x-3 font-medium">
              <MailCheckIcon className="w-6 h-6" />
              <Link href="mailto:hello@nubia.africa.com">
                hello@nubia.africa.com
              </Link>
            </div>
            <div className="flex items-center my-2 space-x-3 font-medium">
              <PhoneCallIcon className="w-6 h-6" />
              <Link href="tel:00270120040012">(012) 004 0012</Link>
            </div>
            {/* <div className="flex items-center space-x-3 font-medium">
              <SmartphoneIcon className="w-6 h-6" />
              <Link href="https://wa.me/27836431755" target="_blank">
                WhatsApp
              </Link>
            </div> */}
            <div className="w-full mt-6">
              <Image
                src="/images/contact.png"
                width={640}
                height={480}
                alt="Contact"
                className="w-full aspect-[4/2] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <form
            action={(formData) => {
              formAction(formData);
            }}
            className="w-full"
          >
            <div className="flex gap-4 ">
              <div className="flex flex-col w-full my-3 space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col w-full my-3 space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              <div className="flex flex-col w-full my-3 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="" />
              </div>
              <div className="flex flex-col w-full my-3 space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" name="phone" placeholder="" />
              </div>
            </div>
            <div className="flex-col w-full my-3 mt-2 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={3} />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-1/2 mt-3 bg-black rounded-none"
            >
              {isPending ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
