import React from "react";
import Link from "next/link";
import Image from "next/image";
import Chip from "./Chip";

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
          <div className="py-8 flex flex-wrap text-lg">
            <Chip variant={"default"} />
            <Chip variant={"default"} />
            <Chip variant={"default"} />
            <Chip variant={"default"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
