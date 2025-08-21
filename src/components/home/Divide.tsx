import React from "react";
interface DivideProps {
  text?: string;
  icon?: React.ReactNode;
  iconStyle?: string;
}

const Divide = ({ text, icon, iconStyle }: DivideProps) => {
  return (
    <>
  
        <div className="w-60 inline-flex flex-col justify-start items-start gap-20">
          <div
            className={`${iconStyle} justify-start bg-gradient-to-br from-darkRed to-red bg-clip-text text-transparent text-4xl font-medium`}
          >
            {icon}
          </div>
          <div className="self-stretch justify-start text-neutral-900 text-2xl font-semibold font-['Neue_Haas_Grotesk_Display_Pro']">
            {text}
          </div>
        </div>

    </>
  );
};

export default Divide;
