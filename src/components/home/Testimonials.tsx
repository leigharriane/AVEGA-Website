"use client";

import React, { useState } from "react";
import Image from "next/image";
import RiseText from "../RiseText";
import ArrowIcon from "../../../public/icons/Arrow";

export default function Testimonials() {
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
        <div className="flex flex-row gap-5">
          <div className="w-18 h-18 rotate-180 border-2 border-black rounded-full p-2.5">
            <ArrowIcon />
          </div>
          <div className="w-18 h-18 border-2 border-black rounded-full p-2.5">
            <ArrowIcon />
          </div>
        </div>
        <div className="flex flex-col gap-10 max-w-[800px]">
          <div className="text-2xl">
            "Working with AVega has been a game-changer for our business. Their
            expertise and attention to detail were evident in every phase of our
            project. We couldn&apos;t be happier with the results!"
          </div>
          <div className="flex flex-row gap-5 justify-start items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div>
              <p className="text-lg text-black font-bold">Emily Russel</p>
              <p className="text-md text-red font-bold">
                CEO of TechVantage Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
