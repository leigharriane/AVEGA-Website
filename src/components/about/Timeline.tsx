"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const timelineData = [
  {
    year: 1981,
    title: "A Man with a Vision",
    description:
      "The beginning of an extraordinary journey. A visionary leader emerges with bold ideas that would reshape the future, setting the foundation for decades of innovation and growth.",
    image: "/images/alexander-vega-sr.jpg",
    position: "top",
  },
  {
    year: 1982,
    title: "A Father’s Vision, A Family’s Mission",
    description:
      "Taking the first brave steps into uncharted territory. With courage and determination, new paths are forged through uncertainty, laying the groundwork for future breakthroughs.",
    image: "/images/vega-family.jpg",
    position: "bottom",
  },
  {
    year: 1983,
    title: "Stepping Into the Unknown",
    description:
      "Strategic alliances form the backbone of success. Strong partnerships are established, creating a network of trust and collaboration that would prove invaluable in the years to come.",
    image: "/images/vega-family.jpg",
    position: "top",
  },
  {
    year: 1985,
    title: "Loss Beneath the Waves",
    description:
      "Legacy takes shape as vision becomes mission. A father's dreams transform into a family's shared purpose, ensuring continuity and dedication across generations.",
    image: "/images/vega-family.jpg",
    position: "bottom",
  },
  {
    year: 1986,
    title: "Anchored in Partnership",
    description:
      "Through adversity comes strength. Facing unexpected challenges and losses, resilience is tested and character is forged, ultimately leading to deeper wisdom and renewed purpose.",
    image: "/images/vega-family.jpg",
    position: "top",
  },
  {
    year: 1995,
    title: "Passing the Wheel",
    description:
      "Through adversity comes strength. Facing unexpected challenges and losses, resilience is tested and character is forged, ultimately leading to deeper wisdom and renewed purpose.",
    image: "/images/vega-family.jpg",
    position: "top",
  },
];

export default function Timeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const CARD_WIDTH = 400;
  const baseOffset = 40;

  const topYears = [1981, 1983, 1985, 1987, 1995, 1997, 1999];

  const calculateCardPosition = (cardYear: number) => {
    const yearSpacing = CARD_WIDTH;
    switch (cardYear) {
      case 1981:
        return baseOffset;
      case 1982:
        return baseOffset + 0 * yearSpacing + yearSpacing / 2;
      case 1983:
        return baseOffset + 1 * yearSpacing;
      case 1985:
        return baseOffset + 2 * yearSpacing;
      case 1986:
        return baseOffset + 2 * yearSpacing + yearSpacing / 2;
      case 1995:
        return baseOffset + 4 * yearSpacing;
      default:
        const minYear = topYears[0];
        const maxYear = topYears[topYears.length - 1];
        const yearRange = maxYear - minYear;
        const cardPosition =
          ((cardYear - minYear) / yearRange) *
          (yearSpacing * (topYears.length - 1));
        return cardPosition + baseOffset;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let targetX = 0;
    let currentX = 0;
    const maxScrollX = content.scrollWidth - container.clientWidth;
    let isAnimating = false;

    let touchStartX: number | null = null;
    let touchCurrentX: number | null = null;
    let lastTouchTime = 0;
    let lastTouchX = 0;
    let velocityX = 0;
    let momentumID: number | null = null;

    const onTick = () => {
      if (!isAnimating) return;

      const delta = targetX - currentX;
      currentX += delta * 0.1;
      if (Math.abs(delta) < 0.5) {
        currentX = targetX;
        isAnimating = false;
      }
      currentX = Math.min(Math.max(currentX, 0), maxScrollX);
      content.style.transform = `translateX(${-currentX}px)`;
    };

    const animateMomentum = () => {
      if (Math.abs(velocityX) < 0.1) {
        velocityX = 0;
        momentumID = null;
        return;
      }

      velocityX *= 0.95; // friction

      targetX += velocityX;
      targetX = Math.min(Math.max(targetX, 0), maxScrollX);

      if (!isAnimating) {
        isAnimating = true;
        gsap.ticker.add(onTick);
      }

      momentumID = requestAnimationFrame(animateMomentum);
    };

    const onWheel = (e: WheelEvent) => {
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (
        (scrollingDown && targetX < maxScrollX) ||
        (scrollingUp && targetX > 0)
      ) {
        e.preventDefault();

        targetX += e.deltaY;
        targetX = Math.min(Math.max(targetX, 0), maxScrollX);

        if (!isAnimating) {
          isAnimating = true;
          gsap.ticker.add(onTick);
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        if (momentumID) {
          cancelAnimationFrame(momentumID);
          momentumID = null;
        }

        touchStartX = e.touches[0].clientX;
        touchCurrentX = touchStartX;
        lastTouchX = touchStartX;
        lastTouchTime = e.timeStamp;
        velocityX = 0;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStartX) return;
      touchCurrentX = e.touches[0].clientX;

      const deltaX = touchStartX - touchCurrentX;

      if ((deltaX > 0 && targetX < maxScrollX) || (deltaX < 0 && targetX > 0)) {
        e.preventDefault();

        targetX += deltaX;
        targetX = Math.min(Math.max(targetX, 0), maxScrollX);

        if (!isAnimating) {
          isAnimating = true;
          gsap.ticker.add(onTick);
        }

        const now = e.timeStamp;
        const dt = now - lastTouchTime;
        if (dt > 0) {
          velocityX = ((lastTouchX - touchCurrentX) / dt) * 16;
        }
        lastTouchX = touchCurrentX;
        lastTouchTime = now;

        touchStartX = touchCurrentX;
      }
    };

    const onTouchEnd = () => {
      touchStartX = null;
      touchCurrentX = null;

      if (Math.abs(velocityX) > 0.5) {
        animateMomentum();
      } else {
        velocityX = 0;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      gsap.ticker.remove(onTick);
      if (momentumID) cancelAnimationFrame(momentumID);
    };
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const cards = contentRef.current.querySelectorAll(".timeline-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            end: "left 20%",
            scrub: 1,
            horizontal: true,
            scroller: contentRef.current,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" ref={scrollContainerRef}>
      <div
        ref={contentRef}
        className="relative"
        style={{
          width: `${topYears.length * CARD_WIDTH}px`,
          height: "100%",
          willChange: "transform",
        }}
      >
        <div
          className="flex text-lightGray text-sm font-semibold absolute top-8 left-0"
          style={{ width: `${topYears.length * CARD_WIDTH}px` }}
        >
          {topYears.map((year) => (
            <div
              key={year}
              className="flex-shrink-0"
              style={{
                width: `${CARD_WIDTH}px`,
                paddingLeft: "25px",
                textAlign: "left",
              }}
            >
              <span>{year}</span>
            </div>
          ))}
        </div>

        <div
          className="absolute top-16 left-0 flex"
          style={{
            width: `${topYears.length * CARD_WIDTH}px`,
            height: "calc(100vh - 4rem)",
          }}
        >
          {topYears.map((year, index) => (
            <div
              key={`line-${year}`}
              className="flex-shrink-0 relative"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div
                className="absolute w-px bg-lightestGray h-full"
                style={{ left: "40px" }}
              />
              {index < topYears.length - 1 && (
                <div
                  className="absolute w-px bg-lightestGray h-full"
                  style={{ left: "240px" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative h-full">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`timeline-card absolute cursor-pointer ${
                item.position === "top" ? "top-[10%]" : "top-[50%]"
              } transition-all duration-300 ease-out`}
              style={{
                left: `${calculateCardPosition(item.year) + 10}px`,
                transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredCard === index ? 50 : 20,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`bg-lightestGray rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
                  hoveredCard === index ? "shadow-md" : "hover:shadow-none"
                }`}
                style={{ width: "356px" }}
              >
                <div className="p-2 md:p-5 md:pb-5">
                  <span className="text-sm text-lightGray mb-2.5">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>

                <div className="px-2 md:px-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl object-cover w-full md:w-[316px] h-[200px]"
                    width={1080}
                    height={1080}
                  />
                </div>

                <div
                  className={`px-2 md:px-5 pb-2 md:pb-5 transition-all duration-300 ease-out overflow-hidden ${
                    hoveredCard === index
                      ? "pt-2 md:pt-5 max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm font-medium text-lightGray">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lighterGray text-sm">
        <div className="flex items-center space-x-2">
          <span>Scroll to explore</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
}
