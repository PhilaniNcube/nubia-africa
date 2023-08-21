import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const page = () => {
  return (
    <main className="container py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="w-full">
          <h1 className="hidden text-4xl font-bold uppercase lg:text-6xl">
            Contact Us
          </h1>
          {/* <Separator className="my-4" /> */}
          <div className="w-full mt-3">
            <p className="font-medium text-md md:text-lg">
              We&apos;re here to help you with all of your tax and accounting
              needs. Whether you&apos;re a small business owner or a large
              corporation, we can provide you with the services you need to
              succeed.
            </p>
            <p className="mt-3 font-medium text-md md:text-lg">
              Contact us today for a free consultation!
            </p>
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
          <form className="w-full mt-6">
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
              Save
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default page;
