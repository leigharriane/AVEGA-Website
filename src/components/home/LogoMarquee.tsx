"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";

type Logo = { src: string; alt?: string; width?: number; height?: number };

interface LogoMarqueeProps {
  logos: Logo[]; // pass JPG/PNG paths here
  speed?: number; // px per second (default 100)
  gapClass?: string; // Tailwind gap between logos (default gap-16)
  reverse?: boolean; // run right-to-left by default; set true to reverse
  pauseOnHover?: boolean; // pause animation when hovering
}

export default function LogoMarquee({
  logos,
  speed = 100,
  gapClass = "gap-14",
  reverse = false,
  pauseOnHover = true,
}: LogoMarqueeProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const tweenRef = React.useRef<gsap.core.Tween | null>(null);

  const build = React.useCallback(() => {
    if (!trackRef.current || !wrapRef.current) return;

    // kill any previous tween
    tweenRef.current?.kill();
    gsap.set(trackRef.current, { x: 0 });

    // total distance to move is half the track, since we render the logos twice
    const full = trackRef.current.scrollWidth;
    const distance = full / 2;

    // duration = distance / speed (px/s)
    const duration = distance / Math.max(1, speed);

    tweenRef.current = gsap.to(trackRef.current, {
      x: reverse ? distance : -distance,
      duration,
      ease: "none",
      repeat: -1,
      // jump back to 0 at each repeat — seamless because the content is duplicated
      onRepeat: () => {
        gsap.set(trackRef.current, { x: 0 });
      },
    });
  }, [speed, reverse]);

  React.useLayoutEffect(() => {
    // Rebuild after mount, on resize, and whenever images cause layout change
    const rebuild = () => build();

    // Initial
    rebuild();

    // ResizeObserver keeps it robust when widths change
    const ro = new ResizeObserver(rebuild);
    if (trackRef.current) ro.observe(trackRef.current);

    // Rebuild again after images load (Next/Image may change sizes)
    const onLoad = () => rebuild();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", rebuild);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", rebuild);
      ro.disconnect();
      tweenRef.current?.kill();
    };
  }, [build]);

  React.useEffect(() => {
    if (!pauseOnHover || !wrapRef.current || !tweenRef.current) return;
    const el = wrapRef.current;
    const enter = () => tweenRef.current?.pause();
    const leave = () => tweenRef.current?.resume();
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [pauseOnHover]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden mask-fade-x"
      aria-label="Logo marquee"
    >
      {/* Track — duplicated content for seamless loop */}
      <div
        ref={trackRef}
        className={`flex ${gapClass} items-center w-max will-change-transform py-4`}
      >
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={`${logo.src}-${i}`}
            src={logo.src}
            alt={logo.alt ?? ""}
            width={logo.width ?? 160}
            height={logo.height ?? 64}
            className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            priority={i < logos.length} // preload first set for faster start
          />
        ))}
      </div>
    </div>
  );
}
