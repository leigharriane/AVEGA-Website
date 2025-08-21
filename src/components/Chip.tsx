import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ChipProps {
  variant: "default";
}

const Chip = ({ variant }: ChipProps) => {
  return (
    <>
      <div className="flex flex-row gap-2.5 py-2.5 px-5 bg-lightestGray rounded-full">
        <p>1</p>
        <p>Warehouse Pickup</p>
      </div>
    </>
  );
};

export default Chip;
