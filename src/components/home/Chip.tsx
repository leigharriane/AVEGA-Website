import React from "react";

interface ChipProps {
  text?: string;
  icon?: React.ReactNode;
  iconStyle?: string;
}

const Chip = ({ text, icon, iconStyle }: ChipProps) => {
  return (
    <>
      <div className="flex text-base flex-row gap-2.5 py-2.5 px-5 bg-lightestGray rounded-full hover:bg-red hover:text-white hover:[&_svg]:fill-white hover:[&_svg]:stroke-white [&_svg]:stroke-black [&_svg]:fill-black transition-all duration-300 ease-out">
        <p className={`${iconStyle}`}>{icon}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Chip;
