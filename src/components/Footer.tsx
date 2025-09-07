"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    if (!ref.current) return;

    const setVar = () => {
      const h = ref.current!.offsetHeight;
      document.documentElement.style.setProperty("--footer-h", `${h}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(ref.current);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <footer
      id="fixedFooter"
      ref={ref}
      className="fixed bottom-0 left-0 right-0 -z-10"
    >
      <div className="px-20 pt-20 w-full">
        <div className="w-full flex flex-row items-start justify-between text-black">
          <div className="flex flex-col gap-10 max-w-[300px]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1100}
              height={800}
              className="w-[170px] h-[123px] object-cover rounded-xs transition-all duration-300"
            />
            <div className="text-base">
              Copyright © 2025 AVega Bros. Integrated Shipping Corp. All Rights Reserved.
            </div>
          </div>

          <div className="flex flex-row items-start w-full max-w-[820px] justify-between gap-[2.5rem] font-medium text-base">
            <div className="flex flex-col gap-2.5">
              <p className="text-base text-lightGray">EXPLORE</p>
              <div className="flex flex-col gap-1">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about">Services</Link>
                <Link href="/about">Fleet</Link>
                <Link href="/about">Careers</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[300px]">
              <div className="flex flex-col gap-2.5">
                <p className="text-base text-lightGray">MAIN OFFICE</p>
                <div className="flex flex-col gap-1">
                  <Link href="/">Sitio Baha-baha, Tayud, Consolacion, Cebu 6001</Link>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-base text-lightGray">CEBU BRANCH</p>
                <div className="flex flex-col gap-1">
                  <Link href="/">J. De Veyra St., North Reclamation Area, Cebu City 6000</Link>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-base text-lightGray">MAKATI BRANCH</p>
                <div className="flex flex-col gap-1">
                  <Link href="/">
                    Alexander Suites G/F 8070 Tanguille St., cor. Estrella Avenue, San Antonio
                    Village, Makati City 1203
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[300px]">
              <div className="flex flex-col gap-2.5">
                <p className="text-base text-lightGray">OTHER</p>
                <div className="flex flex-col gap-1">
                  <Link href="/">Privacy Policy</Link>
                  <Link href="/">Terms & Conditions</Link>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-base text-lightGray">CONTACT</p>
                <div className="flex flex-col gap-1">
                  <Link href="/">marketing@avegabros.com</Link>
                  <Link href="/">operations@avegabros.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      

      <div className="text-lightestGray font-bold text-[15.5vw] max-h-[230px]">
        AVEGA BROS.
      </div>
    </footer>
  );
}