"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chip from "./Chip";
import Button from "../Button";
import ShippingIcon from "../../../public/icons/Shipping";
import TruckingIcon from "../../../public/icons/Trucking";
import LighterageIcon from "../../../public/icons/Lighterage";
import WarehouseIcon from "../../../public/icons/Warehouse";
import EquipmentIcon from "../../../public/icons/Equipment";

interface CardProps {
  variant?: "firstHome" | "secondHome";
}

type ImgInfo = { src: string; alt: string };

const firstImages: Record<string, ImgInfo> = {
  "Warehouse Pickup": {
    src: "/images/wh-pickup.png",
    alt: "Warehouse pickup",
  },
  "Port Transfer & Handling": {
    src: "/images/port-transfer.png",
    alt: "Port transfer & handling",
  },
  "Nationwide Shipping": {
    src: "/images/nationwide.png",
    alt: "Nationwide shipping",
  },
  "Regional Delivery": {
    src: "/images/regional.png",
    alt: "Regional delivery",
  },
  "Warehouse Management": {
    src: "/images/warehouse-mgmt.png",
    alt: "Warehouse management",
  },
};

const secondImages: Record<string, ImgInfo> = {
  Shipping: { src: "/images/nationwide.png", alt: "Shipping" },
  Trucking: { src: "/images/trucking.png", alt: "Trucking" },
  Lighterage: { src: "/images/lighterage.png", alt: "Lighterage" },
  "Warehouse Management": {
    src: "/images/home-img2.png",
    alt: "Warehouse management",
  },
  "Equipment Rentals": {
    src: "/images/equipment.png",
    alt: "Equipment rentals",
  },
};

const Card = ({ variant = "firstHome" }: CardProps) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const defaultImg: ImgInfo =
    variant === "firstHome"
      ? { src: "/images/home-img1.png", alt: "Full-Cycle Logistics Service" }
      : { src: "/images/home-img2.png", alt: "Custom-Fit Cargo Services" };

  const images = variant === "firstHome" ? firstImages : secondImages;

  const chipsFirst = [
    "Warehouse Pickup",
    "Port Transfer & Handling",
    "Nationwide Shipping",
    "Regional Delivery",
    "Warehouse Management",
  ];

  const chipsSecond: Array<{ label: string; icon: React.ReactNode }> = [
    { label: "Shipping", icon: <ShippingIcon /> },
    { label: "Trucking", icon: <TruckingIcon /> },
    { label: "Lighterage", icon: <LighterageIcon /> },
    { label: "Warehouse Management", icon: <WarehouseIcon /> },
    { label: "Equipment Rentals", icon: <EquipmentIcon /> },
  ];

  const activeImg = hovered && images[hovered] ? images[hovered] : defaultImg;

  return (
    <div className="rounded-md border-[1px] border-lighterGray p-8 flex flex-row gap-5 transition-all duration-300 ease-out">
      {/* Preview image that swaps on chip hover/focus */}
      <Image
        key={activeImg.src} // ensures smooth swap with Next/Image
        src={activeImg.src}
        alt={activeImg.alt}
        width={1920}
        height={1080}
        className="w-5/12 object-cover min-w-[480px] h-[380px] rounded-sm"
        priority
      />

      {variant === "firstHome" ? (
        <div className="flex flex-col w-full gap-3">
          <div className="text-2xl font-bold">Full-Cycle Logistics Service</div>
          <div className="text-lg text-lightGray">
            Follows the ICHS procedure that transports goods from the initial
            storage to the destination.
          </div>

          <div className="py-8 flex flex-wrap gap-3">
            {chipsFirst.map((label, i) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(label)}
                onBlur={() => setHovered(null)}
              >
                {/* If your Chip supports onMouseEnter directly, you can pass handlers to it instead */}
                <Chip text={label} icon={(i + 1).toString()} />
              </div>
            ))}
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
      ) : (
        <div className="flex flex-col w-full gap-3">
          <div className="text-2xl font-bold">Custom-Fit Cargo Services</div>
          <div className="text-lg text-lightGray">
            Customize your logistic needs with any of our services
          </div>

          <div className="py-8 flex flex-wrap gap-3">
            {chipsSecond.map(({ label, icon }) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(label)}
                onBlur={() => setHovered(null)}
              >
                <Chip text={label} icon={icon} iconStyle="w-6 h-6" />
              </div>
            ))}
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
      )}
    </div>
  );
};

export default Card;
