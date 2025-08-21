import React from "react";
import Link from "next/link";
import Image from "next/image";
import Chip from "./Chip";
import Button from "./Button";

interface CardProps {
  variant: "default";
}

const Card = ({ variant }: CardProps) => {
  return (
    <>
      <div className="rounded-md border-[1px] border-lighterGray p-8 flex flex-row gap-5">
        <Image
          src="/images/home-img1.jpg"
          alt="Full-Cycle Logistics Service"
          width={1920}
          height={1080}
          className="w-full object-cover rounded-sm"
        />
        <div className="flex flex-col w-full gap-3">
          <div className="text-2xl font-bold">Full-Cycle Logistics Service</div>
          <div className="text-lg text-lightGray">
            Follows the ICHS procedure that transports goods from the initial
            storage to the destination.
          </div>
          <div className="py-8 flex flex-wrap text-lg gap-3">
            <Chip text="Warehouse Pickup" icon="1" />
            <Chip text="Port Transfer & Handling" icon="2" />
            <Chip text="Nationwide Shipping" icon="3" />
            <Chip text="Regional Delivery" icon="4" />
            <Chip text="Warehouse Management" icon="5" />
          </div>
          <Button
            color="red"
            size="medium"
            classN="text-lg font-semibold"
            children={"More about ICHS"}
            link={"/services"}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
