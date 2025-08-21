import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "full";
  color?: "red" | "darkRed" | "gradient" | "white";
  classN?: string;
  link: HTMLLinkElement | string;
  target?: "_blank" | "_self";
}

const Button = ({
  children,
  size = "small",
  color = "red",
  classN,
  link,
  target = "_self",
}: ButtonProps) => {
  const type = {
    size: {
      small: "px-5 py-2.5",
      medium: "px-7 py-3.5",
      full: "px-4 w-full",
    },
    color: {
      red: "bg-red text-white",
      darkRed: "bg-darkRed text-white",
      white: "bg-lightestGray text-black",
      gradient: "bg-gradient-to-br from-darkRed to-red text-white",
    },
  };

  return (
    <>
      <Link href={link} target={target}>
        <button
          className={` ${classN} ${type.size[size]}  ${type.color[color]} transition duration-300 ease-in-out rounded-sm`}
        >
          <div className="">{children}</div>
        </button>
      </Link>
    </>
  );
};

export default Button;
