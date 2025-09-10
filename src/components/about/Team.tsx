"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "First Generation",
    images: [
      {
        photo: "/images/alexander-vega-sr.jpg",
        name: "Alexander R. Vega Sr.",
        position: "Founder",
      },
    ],
  },
  {
    id: 2,
    title: "Second Generation",
    images: [
      {
        photo: "/images/trucking.png",
        name: "Alec N. Vega",
        position: "Chairman of the Board",
      },
      {
        photo: "/images/trucking.png",
        name: "Alexander N. Vega Jr.",
        position: "Vice Chairman",
      },
      {
        photo: "/images/trucking.png",
        name: "Alison N. Vega",
        position: "President and CEO",
      },
      {
        photo: "/images/trucking.png",
        name: "Joel  Hechanova",
        position: "Vice President Engineer",
      },
    ],
  },
  {
    id: 3,
    title: "Third Generation",
    images: [
      {
        photo: "/images/trucking.png",
        name: "Stephen Vega",
        position: "COO External",
      },
      {
        photo: "/images/trucking.png",
        name: "Alec Daniel Sandy J. Vega",
        position: "COO Internal",
      },
      {
        photo: "/images/trucking.png",
        name: "Christian Adrian J.  Vega",
        position: "Supply Chain Manager",
      },
      {
        photo: "/images/trucking.png",
        name: "Samantha Alec G. Vega",
        position: "Business Analyst",
      },
    ],
  },
];

const Team = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    for (let i = 0; i <= currentStep; i++) {
      const iconRef = iconRefs.current[i];
      if (iconRef) {
        gsap.to(iconRef, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    }
  }, [currentStep]);

  useEffect(() => {
    if (progressRef.current) {
      const progressPercentage =
        currentStep === steps.length - 1 ? 100 : ((currentStep + 1) / 6) * 100;
      gsap.to(progressRef.current, {
        width: `${progressPercentage}%`,
        duration: 0.2,
        ease: "power2.out",
      });
    }

    stepRefs.current.forEach((stepRef, index) => {
      const isCompleted = index < currentStep;
      const isActive = index === currentStep;

      if (stepRef) {
        const stepCircle = stepRef.querySelector(".step-circle");
        const icon = iconRefs.current[index];

        if (stepCircle) {
          gsap.to(stepCircle, {
            scale: isActive ? 1.1 : 1,
            backgroundColor: isActive || isCompleted ? "red" : "#e5e7eb",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        if (icon) {
          gsap.to(icon, {
            opacity: isActive || isCompleted ? 1 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        const stepText = stepRef.querySelector(".step-text");
        if (stepText) {
          gsap.to(stepText, {
            color: isActive || isCompleted ? "#1f2937" : "#9ca3af",
            duration: 0.3,
          });
        }
      }
    });

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && currentStep === 0) {
        return;
      }

      e.preventDefault();

      if (isScrollingRef.current) return;

      isScrollingRef.current = true;

      const delay = 300;

      if (e.deltaY > 0) {
        if (currentStep < steps.length - 1) {
          setTimeout(() => {
            handleNext();
          }, delay);
        } else {
          window.scrollTo({
            top: window.scrollY + 400,
            behavior: "smooth",
          });
          isScrollingRef.current = false;
        }
      } else {
        if (currentStep > 0) {
          setTimeout(() => {
            handlePrevious();
          }, delay);
        } else {
          isScrollingRef.current = false;
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, delay + 500);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [currentStep, steps.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const threshold = 50;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].clientX;
      touchEndX.current = null;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
    };

    const onTouchEnd = () => {
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const distance = touchStartX.current - touchEndX.current;

        if (Math.abs(distance) > threshold) {
          if (distance > 0) {
            handleNext();
          } else {
            handlePrevious();
          }
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    } else {
      setCompletedSteps((prev) => [...prev, currentStep]);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCompletedSteps((prev) =>
      stepIndex > currentStep ? [...prev, currentStep] : prev
    );
    setCurrentStep(stepIndex);
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-10">
      <div className="flex">
        <div
          className="inline-flex bg-lightestGray rounded-lg md:rounded-full 
                  flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:w-auto"
        >
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`py-[14px] px-[28px] rounded-full font-medium transition-all duration-300 text-lg 
                    w-full text-left sm:w-auto sm:text-center
                    ${
                      currentStep === index
                        ? "bg-black text-white shadow"
                        : "text-lightGray hover:bg-lightestGray"
                    }`}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
        >
          {steps[currentStep].images.length < 4 &&
            Array.from({ length: 4 - steps[currentStep].images.length }).map(
              (_, i) => <div key={`empty-${i}`} />
            )}

          {steps[currentStep].images.map((item, e) => (
            <div key={e} className="w-full flex flex-col gap-5">
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={item.photo}
                  alt={steps[currentStep].title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-xl">{item.name}</span>
                <span className="font-medium text-base text-lightGray leading-[100%]">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
