"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);

  return (
    <nav className="py-5 px-10 w-full flex flex-row items-center justify-between">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={1100}
        height={800}
        className=" w-[3.5625rem] h-[2.59094rem] object-cover rounded-lg"
      />
      <div className="flex flex-row items-center justify-between gap-[2.5rem] font-medium text-[1.25rem]">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>Services</Link>
        <Link href={"/about"}>Fleet</Link>
        <Link href={"/about"}>Careers</Link>
      </div>
      <Button
        link="#Contact"
        size="small"
        color="red"
        classN="text-[0.875rem] font-semibold"
      >
        Contact Us
      </Button>
    </nav>
  );
}
