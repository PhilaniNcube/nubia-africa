import Services from "../Services";
import Image from "next/image";

const page = () => {
  return (
    <main className="">
      <div className="container pt-10">
        <div className="relative flex items-center justify-center w-full h-[70vh] isolate bg-blue-200/80">
          {/* <h1 className="text-[4rem] md:text-[6rem] translate-x-16 lg:text-[8rem] relative z-10 text-black font-extrabold uppercase">
            Services
          </h1> */}
          <Image
            src="/images/tax-forms.jpg"
            className="absolute inset-0 object-cover w-full h-full grayscale aspect-video"
            width={1920}
            height={1280}
            alt="image"
          />
        </div>
      </div>

      <Services />
    </main>
  );
};
export default page;
