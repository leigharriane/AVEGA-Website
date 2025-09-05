"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import FooterReveal from "./FooterReveal";
import Footer from "./Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function Client({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="bg-white">{children}</div>
        <FooterReveal />
      </div>
      <Footer />
    </div>
  );
}
