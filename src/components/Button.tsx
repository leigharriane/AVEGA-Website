import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "full";
  color?: "red" | "darkRed" | "gradient";
  classN?: string;
  link: HTMLLinkElement | string;
  target?: "_blank" | "_self";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "small",
  color = "red",
  classN,
  link,
  target = "_self",
}) => {
  const type = {
    size: {
      small: "px-5 py-2.5",
      medium: "px-7 py-3.5",
      full: "px-4 w-full",
    },
    color: {
      red: "bg-[#F00]",
      darkRed: "bg-[#D80000]",
      gradient: "bg-gradient-to-br from-[#d80000] to-[#F00]",
    },
  };

  return (
    <>
      <Link href={link} target={target}>
        <button
          className={`text-white ${classN} ${type.size[size]}  ${type.color[color]} transition duration-300 ease-in-out rounded-lg`}
        >
          <div className="font-semibold text-[18px]">{children}</div>
        </button>
      </Link>
    </>
  );
};

export default Button;
