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
    // "Cargo Ships": { src: "/images/fleet-cargo.png", alt: "Cargo ships" },
    // Barges: { src: "/images/fleet-barges.png", alt: "Barges" },
    // Tugboats: { src: "/images/fleet-tugboats.png", alt: "Tugboats" },
    "Cargo Ships": { src: "/images/home-img3.png", alt: "Cargo ships" },
    Barges: { src: "/images/home-img2.png", alt: "Barges" },
    Tugboats: { src: "/images/home-img1.png", alt: "Tugboats" },
  };

  const items = [
    { text: "Cargo Ships", icon: "45" },
    { text: "Barges", icon: "9" },
    { text: "Tugboats", icon: "8" },
  ];

  const shown = active && imgs[active] ? imgs[active] : defaultImg;

  return (
    <div className="px-20 flex flex-row gap-10 w-full">
      <div className="flex flex-col gap-10">
        <RiseText
          text="A Diverse Fleet for Diverse Cargo Needs"
          className="text-4xl max-w-[480px]"
          start="top 80%"
          duration={1}
          stagger={0.02}
        />

        <div className="w-full flex flex-row gap-0">
          {items.map(({ text, icon }) => (
            <div
              key={text}
              role="button"
              tabIndex={0}
              aria-label={`Show ${text}`}
              onMouseEnter={() => setActive(text)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(text)}
              onBlur={() => setActive(null)}
              onTouchStart={() => setActive(text)}
              onTouchEnd={() => setActive(null)}
              className="outline-none w-1/3 flex flex-row justify-between items-center gap-5"
            >
              <div className="w-[3px] h-64 bg-zinc-100 rounded-xl"></div>
              <Divide icon={icon} text={text} />
            </div>
          ))}
        </div>
      </div>

      {/* Image that swaps on Divide hover/focus */}
      <div className="w-full">
        <Image
          key={shown.src} // forces a smooth re-render when src changes
          src={shown.src}
          alt={shown.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
