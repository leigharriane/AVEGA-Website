import Image from "next/image";
import Button from "../Button";

const ServicesFeaturedCards = () => {
  return (
    <div className="flex gap-5 flex-col lg:flex-row mt-10">
      <div className="p-5 flex gap-5 flex-col-reverse w-full bg-lightestGray rounded-lg sm:items-center sm:flex-row justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl  leading-[100%]">
            Integrated Cargo Handling Services (ICHS)
          </h1>
          <span className="font-medium text-base text-lightGray leading-[100%]">
            A seamless, end-to-end logistics solution{" "}
          </span>
          <Button
            color="red"
            size="small"
            classN="text-base font-semibold"
            link={"/services"}
          >
            More about ICHS
          </Button>
        </div>
        <Image
          src="/images/about-hero-1.png"
          alt="wh-pickup"
          width={1920}
          height={1080}
          className="object-contain sm:w-1/2 lg:w-1/3 xl:min-w-[226px] h-[250px] rounded-md"
        ></Image>
      </div>
      <div className="p-5 flex gap-5 flex-col-reverse w-full bg-lightestGray rounded-lg sm:items-center sm:flex-row justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl  leading-[100%]">
            Our Tailored Cargo Solutions
          </h1>
          <span className="font-medium text-base text-lightGray leading-[100%]">
            Customize your logistic needs with any of our services
          </span>
          <Button
            color="red"
            size="small"
            classN="text-base font-semibold"
            link={"/services"}
          >
            More about Cargo Solutions
          </Button>
        </div>
        <Image
          src="/images/about-hero-2.png"
          alt="wh-pickup"
          width={1920}
          height={1080}
          className="object-contain sm:w-1/2 lg:w-1/3 xl:min-w-[226px] h-[250px] rounded-md"
        ></Image>
      </div>
    </div>
  );
};

export default ServicesFeaturedCards;
