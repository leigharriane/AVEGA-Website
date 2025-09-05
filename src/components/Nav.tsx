"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";

export default function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const divRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    let styleST: any = null;
    let dirST: any = null;
    let ST: any = null; // ScrollTrigger

    (async () => {
      // Dynamic import prevents plugin timing issues under Turbopack
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ST = ScrollTrigger;

      if (!navRef.current) return;

      // 1) Compact/expanded styles once you’re ~80px down
      styleST = gsap.context(() => {
        ST.create({
          start: 80,
          end: 999999,
          // IMPORTANT: don't set scroller with ScrollSmoother; default (document) works.
          onEnter: () => {
            navRef.current?.classList.remove("py-4", "px-5");
            navRef.current?.classList.add("py-5", "px-20");

            divRef.current?.classList.remove(
              "bg-transparent",
              "text-white",
              "rounded-none"
            );
            divRef.current?.classList.add(
              "bg-white",
              "text-black",
              "rounded-md",
              "border-[1px]",
              "border-lighterGray"
            );
          },
          onLeaveBack: () => {
            navRef.current?.classList.remove("py-5", "px-20");
            navRef.current?.classList.add("py-4", "px-5");

            divRef.current?.classList.remove(
              "bg-white",
              "text-black",
              "rounded-md",
              "border-[1px]",
              "border-lighterGray"
            );
            divRef.current?.classList.add(
              "bg-transparent",
              "text-white",
              "rounded-none"
            );
          },
        });
      }, navRef);

      // 2) Hide on scroll-down, show on scroll-up
      const HIDE_THRESHOLD = 600; //120
      let hidden = false;
      gsap.set(navRef.current, { yPercent: 0 });

      const hide = () => {
        if (hidden) return;
        hidden = true;
        gsap.to(navRef.current, {
          yPercent: -100,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const show = () => {
        if (!hidden) return;
        hidden = false;
        gsap.to(navRef.current, {
          yPercent: 0,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      dirST = gsap.context(() => {
        ST.create({
          start: 0,
          end: 999999,
          onUpdate: (self: { direction: number; }) => {
            // With ScrollSmoother, the document still scrolls; use window/document
            const scrollTop =
              window.scrollY || document.documentElement.scrollTop || 0;

            if (scrollTop < HIDE_THRESHOLD) {
              show();
              return;
            }

            // direction: 1 = down, -1 = up
            if (self.direction === 1) hide();
            else show();
          },
        });
      }, navRef);

      // Nice UX: hovering/focusing the nav forces it visible
      const onEnter = () => show();
      navRef.current.addEventListener("mouseenter", onEnter);
      navRef.current.addEventListener("focusin", onEnter);

      // Cleanup
      return () => {
        navRef.current?.removeEventListener("mouseenter", onEnter);
        navRef.current?.removeEventListener("focusin", onEnter);
      };
    })();

    return () => {
      // kill all ScrollTriggers created in contexts (if they exist)
      styleST?.revert();
      dirST?.revert();
      // Optional: ST?.killAll(); // if you want to be extra safe on route changes
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full py-4 px-5 z-50 flex items-center justify-center transition-all duration-300 ease-out will-change-transform"
    >
      <div
        ref={divRef}
        className="w-full p-3 flex flex-row items-center justify-between bg-transparent text-white rounded-none"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={1100}
          height={800}
          className="w-[3.5625rem] h-[2.59094rem] object-cover rounded-sm transition-all duration-300"
        />
        <div className="flex flex-row items-center justify-between gap-[2.5rem] font-medium text-base transition-all duration-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Services</Link>
          <Link href="/about">Fleet</Link>
          <Link href="/about">Careers</Link>
        </div>
        <Button
          link="#Contact"
          size="small"
          color="red"
          classN="text-base font-semibold"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
