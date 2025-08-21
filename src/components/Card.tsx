import React from "react";
import Image from "next/image";
import Chip from "./Chip";
import Button from "./Button";
import ShippingIcon from "../../public/icons/Shipping";
import TruckingIcon from "../../public/icons/Trucking";
import LighterageIcon from "../../public/icons/Lighterage";
import WarehouseIcon from "../../public/icons/Warehouse";
import EquipmentIcon from "../../public/icons/Equipment";

interface CardProps {
  variant?: "firstHome" | "secondHome";
}

const Card = ({ variant = "firstHome" }: CardProps) => {
  return (
    <>
      <div className="rounded-md border-[1px] border-lighterGray p-8 flex flex-row gap-5">
        {variant === "firstHome" ? (
          <>
            <Image
              src="/images/home-img1.png"
              alt="Full-Cycle Logistics Service"
              width={1920}
              height={1080}
              className="w-5/12 object-cover rounded-sm"
            />
            <div className="flex flex-col w-full gap-3">
              <div className="text-2xl font-bold">
                Full-Cycle Logistics Service
              </div>
              <div className="text-lg text-lightGray">
                Follows the ICHS procedure that transports goods from the
                initial storage to the destination.
              </div>
              <div className="py-8 flex flex-wrap gap-3">
                <Chip text="Warehouse Pickup" icon="1" />
                <Chip text="Port Transfer & Handling" icon="2" />
                <Chip text="Nationwide Shipping" icon="3" />
                <Chip text="Regional Delivery" icon="4" />
                <Chip text="Warehouse Management" icon="5" />
              </div>
              <Button
                color="red"
                size="small"
                classN="text-base font-semibold"
                link={"/services"}
              >
                More about ICHS
              </Button>
            </div>
          </>
        ) : variant === "secondHome" ? (
          <>
            <Image
              src="/images/home-img2.png"
              alt="Custom-Fit Cargo Services"
              width={1920}
              height={1080}
              className="w-5/12 object-cover rounded-sm"
            />
            <div className="flex flex-col w-full gap-3">
              <div className="text-2xl font-bold">
                Custom-Fit Cargo Services
              </div>
              <div className="text-lg text-lightGray">
                Customize your logistic needs with any of our services
              </div>
              <div className="py-8 flex flex-wrap gap-3">
                <Chip
                  text="Shipping"
                  icon={<ShippingIcon />}
                  iconStyle="w-6 h-6"
                />
                <Chip
                  text="Trucking"
                  icon={<TruckingIcon />}
                  iconStyle="w-6 h-6"
                />
                <Chip
                  text="Lighterage"
                  icon={<LighterageIcon />}
                  iconStyle="w-6 h-6"
                />
                <Chip
                  text="Warehouse Management"
                  icon={<WarehouseIcon />}
                  iconStyle="w-6 h-6"
                />
                <Chip
                  text="Equipment Rentals"
                  icon={<EquipmentIcon />}
                  iconStyle="w-6 h-6"
                />
              </div>
              <Button
                color="red"
                size="small"
                classN="text-base font-semibold"
                link={"/services"}
              >
                More about Cargo Solutions
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Card;
