import Services from "../Services";
import Image from "next/image";

const page = () => {
  return (
    <main className="">
      {/* <div className="container pt-10">
        <div className="relative flex items-center justify-center w-full h-[70vh] isolate bg-blue-200/80">

          <Image
            src="/images/tax-forms.jpg"
            className="absolute inset-0 object-cover w-full h-full grayscale aspect-video"
            width={1920}
            height={1280}
            alt="image"
          />
        </div>
      </div> */}

      <Services />
    </main>
  );
};
export default page;
