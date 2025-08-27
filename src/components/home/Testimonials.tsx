"use client";

import React from "react";
import Image from "next/image";
import RiseText from "../RiseText";
import ArrowIcon from "../../../public/icons/Arrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar?: string; // optional image path
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Working with AVega has been a game-changer for our business. Their expertise and attention to detail were evident in every phase of our project. We couldn't be happier with the results!",
    name: "Emily Russell",
    title: "CEO of TechVantage Solutions",
    avatar: "/images/logo.png",
  },
  {
    quote:
      "Their team delivered ahead of schedule and kept communication crystal clear. Execution was smooth, and the outcome exceeded expectations.",
    name: "Carlos Mendes",
    title: "Operations Manager, OceanLift Logistics",
    avatar: "/images/logo.png",
  },
  {
    quote:
      "Strategy, craft, and reliability—AVega nailed all three. We saw measurable improvements within weeks.",
    name: "Ava Patel",
    title: "VP Product, Northstar Freight",
    avatar: "/images/logo.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  // Animate IN whenever index changes
  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }
    );
  }, [index]);

  const wrap = (n: number) => {
    const len = TESTIMONIALS.length;
    return ((n % len) + len) % len;
  };

  // Animate OUT, then update index; IN runs in useEffect above
  const go = (dir: 1 | -1) => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      y: dir * -10,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setIndex((i) => wrap(i + dir)),
    });
  };

  const t = TESTIMONIALS[index];

  return (
    <div className="px-20 flex flex-col gap-10 w-full">
      <RiseText
        text="Testimonials"
        className="text-3xl max-w-[480px]"
        start="top 80%"
        duration={1}
        stagger={0.02}
      />

      <div className="flex flex-row justify-between items-end">
        {/* Arrows */}
        <div className="flex flex-row gap-5">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="w-[72px] h-[72px] rotate-180 border-2 border-black rounded-full p-2.5 grid place-items-center hover:scale-105 active:scale-95 transition"
          >
            <ArrowIcon />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="w-[72px] h-[72px] border-2 border-black rounded-full p-2.5 grid place-items-center hover:scale-105 active:scale-95 transition"
          >
            <ArrowIcon />
          </button>
        </div>

        {/* Right panel (animated) */}
        <div
          ref={contentRef}
          className="flex flex-col gap-10 max-w-[800px] min-h-[300px]"
          aria-live="polite"
        >
          <div className="text-2xl">&quot;{t.quote}&quot;</div>

          <div className="flex flex-row gap-5 justify-start items-center">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.name}
                width={200}
                height={200}
                className="w-12 h-12 object-cover rounded-lg"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-neutral-200" />
            )}

            <div>
              <p className="text-lg text-black font-bold">{t.name}</p>
              <p className="text-md text-red font-bold">{t.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
