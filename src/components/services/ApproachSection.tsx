"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ApproachSection = () => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = descriptionRef.current;

    gsap.set(el, { color: "#000000" });

    gsap.to(el, {
      color: "#888888",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="flex gap-20 py-10">
      <div
        className="font-bold text-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #A30101 0%, #FF0000 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Approach
      </div>
      <div>
        <h1 ref={descriptionRef} className="font-medium text-xl mb-5">
          From bulk and break bulk cargo to specialized transport and our
          integrated ICHS solution, Avega combines expertise, a reliable fleet,
          and advanced technology to deliver your goods safely, efficiently, and
          on time.
        </h1>
        <div
          className="font-bold text-base"
          style={{
            backgroundImage:
              "linear-gradient(to right, #A30101 0%, #FF0000 10%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Connect with us
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
