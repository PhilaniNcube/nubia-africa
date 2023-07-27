import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <main className="py-10 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">
            Contact Us
          </h1>
          <Separator className="my-4" />
          <div className="w-full mt-3">
            <p className="text-md md:text-lg font-medium">
              We&apos;re here to help you with all of your accounting needs.
              Whether you&apos;re a small business owner or a large corporation,
              we can provide you with the services you need to succeed.
            </p>
            <p className="text-md md:text-lg font-medium mt-3">
              Contact us today for a free consultation!
            </p>
          </div>
        </div>
        <div className="w-full">
          <form className="w-full mt-6">
            <div className="flex gap-4 ">
              <div className="flex flex-col my-3 space-y-2 w-full">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col my-3 space-y-2 w-full">
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
              <div className="flex flex-col my-3 space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="" />
              </div>
              <div className="flex flex-col my-3 space-y-2 w-full">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" name="phone" placeholder="" />
              </div>
            </div>
            <div className="w-full flex-col my-3 space-y-2 mt-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={3} />
            </div>

            <Button type="submit" className="rounded-none bg-black w-1/2 mt-3" >Save</Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default page;
