"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const services = [
  {
    title: "Shipping",
    description:
      "Reliable port-to-port transport across the Philippine islands",
    image: "/images/equipment.png",
  },
  {
    title: "Trucking",
    description:
      "Inland cargo transfers between ports, warehouses, or project sites",
    image: "/images/equipment.png",
  },
  {
    title: "Lighterage",
    description: "Transfer cargo at shallow ports or anchorage areas",
    image: "/images/equipment.png",
  },
  {
    title: "Warehouse Management",
    description: "Organized, secure storage and equipment support",
    image: "/images/equipment.png",
  },
];

const TayloredCargoSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full py-6">
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto space-x-4"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[350px] hover:w-[450px] transition-all duration-300 bg-lightestGray rounded-xl p-5"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-5"
              height={300}
              width={300}
            />
            <div className="flex flex-col gap-2.5">
              <h3 className="font-bold text-xl leading-[100%]">
                {service.title}
              </h3>
              <p className="font-medium text-base text-lightGray leading-[100%]">
                {service.description}
              </p>
              <span
                className="font-semibold text-base leading-[100%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #A30101 0%, #FF0000 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Explore {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TayloredCargoSection;
