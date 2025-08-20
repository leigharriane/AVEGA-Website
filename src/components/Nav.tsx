"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const spacerRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!navRef.current || !spacerRef.current) return;

    const setSpacer = () => {
      const h = navRef.current!.getBoundingClientRect().height;
      spacerRef.current!.style.height = `${h}px`;
    };
    setSpacer();

    const st = ScrollTrigger.create({
      start: 80,
      end: 999999,
      onEnter: () => {
        navRef.current?.classList.remove("py-4", "px-5");
        navRef.current?.classList.add("py-5", "px-20");
        divRef.current?.classList.remove(
          "bg-transparent",
          "text-white",
          "rounded-0"
        );
        divRef.current?.classList.add(
          "bg-white",
          "text-black",
          "rounded-[16px]",
          "border-[1px]",
          "border-[#BFBFBF]"
        );
        setSpacer();
      },
      onLeaveBack: () => {
        navRef.current?.classList.remove("py-5", "px-20");
        navRef.current?.classList.add("py-4", "px-5");
        divRef.current?.classList.remove(
          "bg-white",
          "text-black",
          "rounded-[16px]",
          "border-[1px]",
          "border-[#BFBFBF]"
        );
        divRef.current?.classList.add(
          "bg-transparent",
          "text-white",
          "rounded-0"
        );
        setSpacer();
      },
    });

    window.addEventListener("resize", setSpacer);
    return () => {
      st.kill();
      window.removeEventListener("resize", setSpacer);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full py-4 px-5 z-50 flex items-center justify-center transition-all duration-300 ease-out"
      >
        <div
          ref={divRef}
          className="w-full p-5 flex flex-row items-center justify-between bg-transparent text-white rounded-0"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1100}
            height={800}
            className="w-[3.5625rem] h-[2.59094rem] object-cover rounded-lg transition-all duration-300"
          />
          <div className="flex flex-row items-center justify-between gap-[2.5rem] font-medium text-[1.25rem] transition-all duration-300">
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
            classN="text-[0.875rem] font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </nav>
      <div ref={spacerRef} aria-hidden />
    </>
  );
}
