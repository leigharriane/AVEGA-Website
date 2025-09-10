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
  const pathname = usePathname();

  const isHome = pathname === "/";
  const baseTextClass = isHome ? "text-white" : "text-black";

  React.useLayoutEffect(() => {
    let styleCtx: ReturnType<typeof gsap.context> | null = null;
    let dirCtx: ReturnType<typeof gsap.context> | null = null;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!navRef.current) return;

      // SCROLLED STATE: same on all pages (white bg + black text)
      const toScrolled = () => {
        navRef.current?.classList.remove("py-4", "px-5");
        navRef.current?.classList.add("py-5", "px-20");

        if (!divRef.current) return;
        divRef.current.classList.remove(
          "bg-transparent",
          "text-white",
          "text-black",
          "rounded-none",
          "border-[1px]",
          "border-lighterGray"
        );
        divRef.current.classList.add(
          "bg-white",
          "text-black",
          "rounded-md",
          "border-[1px]",
          "border-lighterGray"
        );
      };

      // TOP STATE: depends on route
      const toTop = () => {
        navRef.current?.classList.remove("py-5", "px-20");
        navRef.current?.classList.add("py-4", "px-5");

        if (!divRef.current) return;
        divRef.current.classList.remove(
          "bg-white",
          "text-black",
          "rounded-md",
          "border-[1px]",
          "border-lighterGray"
        );
        divRef.current.classList.remove("text-white", "text-black");
        divRef.current.classList.add(
          "bg-transparent",
          baseTextClass,
          "rounded-none"
        );
      };

      // 1) Class swap after ~80px
      styleCtx = gsap.context(() => {
        ScrollTrigger.create({
          start: 80,
          end: 999999,
          onEnter: toScrolled,
          onLeaveBack: toTop,
        });
      }, navRef);

      // 2) Hide on scroll-down, show on scroll-up (unchanged)
      const HIDE_THRESHOLD = 120;
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
            const scrollTop =
              window.scrollY || document.documentElement.scrollTop || 0;

            if (scrollTop < HIDE_THRESHOLD) {
              show();
              return;
            }
            if (self.direction === 1) hide();
            else show();
          },
        });
      }, navRef);

      // Ensure correct top state immediately (esp. on route change)
      toTop();

      // Show on hover/focus for usability
      const onEnter = () => show();
      navRef.current.addEventListener("mouseenter", onEnter);
      navRef.current.addEventListener("focusin", onEnter);

      return () => {
        navRef.current?.removeEventListener("mouseenter", onEnter);
        navRef.current?.removeEventListener("focusin", onEnter);
      };
    })();

    return () => {
      styleCtx?.revert();
      dirCtx?.revert();
    };
  }, [pathname, baseTextClass]);

  return (
    <nav
      ref={navRef}
      className="fixed w-full py-4 px-5 z-50 flex items-center justify-center transition-all duration-300 ease-out will-change-transform"
    >
      <div
        ref={divRef}
        className={`w-full p-3 flex flex-row items-center justify-between bg-transparent ${baseTextClass} rounded-none`}
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
          <Link href="/services">Services</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <Button link="/contact" size="small" color="red" classN="text-base font-semibold">
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
