"use client";

import React from "react";
import gsap from "gsap";

export default function FooterReveal() {

  return (
    <div
      className="relative h-[var(--footer-h,320px)] pointer-events-none"
      aria-hidden
    >
      {/* Match your page bg color here */}
      <div className="absolute inset-0" />
    </div>
  );
}
