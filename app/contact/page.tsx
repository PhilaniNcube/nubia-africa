import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { LucidePhone, MailCheckIcon, PhoneCallIcon, SmartphoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="container py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="w-full">
          <h1 className="text-4xl font-bold uppercase sr-only lg:text-6xl">
            Contact Us
          </h1>
          {/* <Separator className="my-4" /> */}
          <div className="w-full mt-3">
            <p className="text-sm font-medium ">
              We&apos;re here to help you with all of your tax and accounting
              needs. Whether you&apos;re a small business owner or a large
              corporation, we can provide you with the services you need to
              succeed.
            </p>
            <p className="mt-3 text-sm font-medium ">
              Contact us today for a free consultation!
            </p>
            <div className="flex items-center my-2 space-x-3 font-medium">
              <MailCheckIcon className="w-6 h-6" />
              <Link href="mailto:hello@nubia.africa.com">
                hello@nubia.africa.com
              </Link>
            </div>
            <div className="flex items-center my-2 space-x-3 font-medium">
              <PhoneCallIcon className="w-6 h-6" />
              <Link href="tel:0027120040889">(012) 004 0889</Link>
            </div>
            <div className="flex items-center space-x-3 font-medium">
              <SmartphoneIcon className="w-6 h-6" />
              <Link href="https://wa.me/27120040889" target="_blank">
                WhatsApp
              </Link>
            </div>
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
          <form className="w-full">
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

            <Button type="submit" className="w-1/2 mt-3 bg-black rounded-none">
              Send
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default page;
