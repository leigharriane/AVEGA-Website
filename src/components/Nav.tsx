"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const divRef = React.useRef<HTMLDivElement | null>(null);
  // const pathname = usePathname();
  // let colorText = "text-black";

  // if (pathname === "/") {
  //   colorText = "text-white";
  // } else {
  //   colorText = "text-black";
  // }

  React.useLayoutEffect(() => {
    // typed GSAP contexts (for cleanup via .revert())
    let styleCtx: ReturnType<typeof gsap.context> | null = null;
    let dirCtx: ReturnType<typeof gsap.context> | null = null;

    (async () => {
      // Dynamic import avoids Turbopack timing issues
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!navRef.current) return;

      // 1) Compact/expanded styles once you’re ~80px down
      styleCtx = gsap.context(() => {
        ScrollTrigger.create({
          start: 80,
          end: 999999,
          onEnter: () => {
            navRef.current?.classList.remove("py-4", "px-5");
            navRef.current?.classList.add("py-5", "px-20");

            divRef.current?.classList.remove(
              "bg-transparent",
              "text-white",
              // colorText,
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
              "text-black",
              // colorText,
              "rounded-none"
            );
          },
        });
      }, navRef);

      // 2) Hide on scroll-down, show on scroll-up
      const HIDE_THRESHOLD = 600; // adjust to taste like 120
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

      dirCtx = gsap.context(() => {
        ScrollTrigger.create({
          start: 0,
          end: 999999,
          onUpdate: (self: import("gsap/ScrollTrigger").ScrollTrigger) => {
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

      // Cleanup listener on unmount
      return () => {
        navRef.current?.removeEventListener("mouseenter", onEnter);
        navRef.current?.removeEventListener("focusin", onEnter);
      };
    })();

    // Cleanup GSAP contexts
    return () => {
      styleCtx?.revert();
      dirCtx?.revert();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full py-4 px-5 z-50 flex items-center justify-center transition-all duration-300 ease-out will-change-transform"
    >
      <div
        ref={divRef}
        className={`w-full p-3 flex flex-row items-center justify-between bg-transparent rounded-none`}
      >
        {/* <div
        ref={divRef}
        className={`w-full p-3 flex flex-row items-center justify-between bg-transparent ${colorText} rounded-none`}
      > */}
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
          <Link href="/services">Services</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <Button
          link="/contact"
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
