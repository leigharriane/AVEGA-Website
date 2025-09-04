import Positions from "@/components/careers/Positions";
import RoleForm from "@/components/careers/RoleForm";
import RiseText from "@/components/RiseText";
import React from "react";

const CareerPage = () => {
  return (
    <div className="flex flex-col gap-15 md:gap-20 my-20">
      <div className="px-5 lg:px-20 flex flex-col">
        <div className="flex flex-col">
          <RiseText
            text="Set Your Course for Your Next Destination"
            className="font-medium text-3xl leading-[100%]"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
          <RiseText
            text="Bring your talent aboard and build your future, on land or at sea."
            className="font-medium text-base text-lightGray leading-[100%] mt-2.5"
            start="top 80%"
            duration={1}
            stagger={0.02}
          />
        </div>
        <div className="flex flex-col">
          <Positions />
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col">
          <RoleForm />
        </div>
      </div>
      <div className="px-5 lg:px-20"></div>
      <div className="px-5 lg:px-20"></div>
    </div>
  );
};

export default CareerPage;
