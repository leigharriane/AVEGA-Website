"use client";

import React, { useState } from "react";
import Image from "next/image";
import RiseText from "../RiseText";
import Divide from "./Divide";

export default function FleetBlock() {
  const [active, setActive] = useState<string | null>(null);

  // default + per-Divide images
  const defaultImg = { src: "/images/home-img3.png", alt: "Fleet overview" };
  const imgs: Record<string, { src: string; alt: string }> = {
    "Cargo Ships": { src: "/images/home-img3.png", alt: "Cargo ships" },
    Barges: { src: "/images/home-img2.png", alt: "Barges" },
    Tugboats: { src: "/images/home-img1.png", alt: "Tugboats" },
    Equipments: { src: "/images/home-img3.png", alt: "Equipments" }, // adjust if you have a dedicated image
  };

  const items = [
    { text: "Cargo Ships", icon: "45" },
    { text: "Barges", icon: "9" },
    { text: "Tugboats", icon: "8" },
    { text: "Equipments", icon: "6" },
  ];

  const shown = active && imgs[active] ? imgs[active] : defaultImg;

  return (
    <div className="px-20 w-full flex flex-col gap-10">
      <RiseText
        text="A Diverse Fleet for Diverse Cargo Needs"
        className="text-3xl"
        start="top 80%"
        duration={1}
        stagger={0.02}
      />
      <div className="flex flex-row w-full gap-10">
        {/* Left: heading + 2x2 grid */}
        <div className="flex flex-col gap-8 w-full">
          {/* 2 columns x 2 rows */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 w-full">
            {items.map(({ text, icon }) => (
              <button
                key={text}
                type="button"
                aria-label={`Show ${text}`}
                onMouseEnter={() => setActive(text)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(text)}
                onBlur={() => setActive(null)}
                onTouchStart={() => setActive(text)}
                onTouchEnd={() => setActive(null)}
                className="outline-none w-full flex flex-row items-center gap-5 group text-left"
              >
                <div className="w-[3px] h-48 bg-lightestGray rounded-xl transition-colors group-hover:bg-lighterGray" />
                <Divide icon={icon} text={text} />
              </button>
            ))}
          </div>
        </div>

        {/* Right: image that swaps on Divide hover/focus */}
        <div className="w-full">
          <Image
            key={shown.src} // forces a smooth re-render when src changes
            src={shown.src}
            alt={shown.alt}
            width={1080}
            height={1080}
            className="w-full max-h-[400px] object-cover rounded-lg transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
