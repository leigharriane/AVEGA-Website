import React from "react";
import Button from "../Button";
import Image from "next/image";

const ServicesFeaturedCards = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row mt-10">
      <div className="p-5 w-full bg-lightestGray rounded-lg flex gap-5 justify-between flex-col xl:flex-row">
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
          src="/images/wh-pickup.png"
          alt="wh-pickup"
          width={1920}
          height={1080}
          className="xl:w-5/12 object-cover min-w-[226px] h-[205px] rounded-md"
        ></Image>
      </div>
      <div className="p-5 w-full bg-lightestGray rounded-lg flex gap-5 justify-between flex-col xl:flex-row">
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
          src="/images/nationwide.png"
          alt="wh-pickup"
          width={1920}
          height={1080}
          className="xl:w-5/12 object-cover min-w-[226px] h-[205px] rounded-md"
        ></Image>
      </div>
    </div>
  );
};

export default ServicesFeaturedCards;
