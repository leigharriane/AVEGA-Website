import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ChipProps {
  text?: string;
  icon?: React.ReactNode;
}

const Chip = ({ text, icon }: ChipProps) => {
  return (
    <>
      <div className="flex flex-row gap-2.5 py-2.5 px-5 bg-lightestGray rounded-full">
        <p>{icon}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Chip;
