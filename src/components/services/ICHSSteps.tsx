"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import TruckIcon from "../../../public/icons/Truck";
import VesselIcon from "../../../public/icons/Vessel";
import Warehouse2Icon from "../../../public/icons/Warehouse2";

const steps = [
  {
    id: 1,
    icon: <Warehouse2Icon height={22} width={22} fill="white" />,
    image: "/images/port-transfer.png",
    title: "Warehouse Pickup",
    description:
      "We collect cargo directly from your warehouse using Avega trucks, ensuring secure and efficient loading",
  },
  {
    id: 2,
    icon: <TruckIcon height={22} width={22} fill="white" />,
    image: "/images/trucking.png",
    title: "Port Delivery",
    description:
      "Our trucks transfer the cargo to the port where it is consolidated and prepared for its next transport.",
  },
  {
    id: 3,
    icon: <VesselIcon height={22} width={22} fill="white" />,
    image: "/images/nationwide.png",
    title: "Nationwide Shipment",
    description:
      "Using our own fleet, the cargo is shipped out to its next destination. We can ship cargo to any part of the Philippines.",
  },
  {
    id: 4,
    icon: <TruckIcon height={22} width={22} fill="white" />,
    image: "/images/home-img1.png",
    title: "Distribution to Warehouses",
    description:
      "Once the cargo hits land, we deliver it to the different warehouses in the area.",
  },
  {
    id: 5,
    icon: <Warehouse2Icon height={22} width={22} fill="white" />,
    image: "/images/wh-pickup.png",
    title: "Warehouse Management",
    description:
      "Our team stacks and organizes the goods in the warehouse and readies them for wholesaling or further transport.",
  },
];

export function ICHSSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const [triangleLeft, setTriangleLeft] = useState<number | null>(null);

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
    const updateTrianglePosition = () => {
      const activeStep = stepRefs.current[currentStep];
      if (activeStep && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const stepRect = activeStep.getBoundingClientRect();
        const leftOffset =
          stepRect.left + stepRect.width / 2 - containerRect.left;
        setTriangleLeft(leftOffset);
      }
    };

    updateTrianglePosition();
    window.addEventListener("resize", updateTrianglePosition);
    return () => window.removeEventListener("resize", updateTrianglePosition);
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
            top: document.body.scrollHeight,
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
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
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
    if (stepIndex <= currentStep || completedSteps.includes(stepIndex)) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div ref={containerRef} className="w-full space-y-8 relative">
      <div className="relative w-full h-10">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-lightestGray -translate-y-1/2">
          <div
            ref={progressRef}
            className="h-full bg-red transition-all duration-600"
            style={{ width: "0%" }}
          />

          {[1, 2, 3, 4, 5].map((tick) => (
            <div
              key={tick}
              className="absolute top-1/2 w-px h-4 bg-lightestGray -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(tick / 6) * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Step Indicators */}
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[index] = el;
            }}
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: `${((index + 1) / (steps.length + 1)) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => handleStepClick(index)}
          >
            <div className="step-circle w-10 h-10 rounded-full flex items-center justify-center bg-lightestGray transition-all duration-300 group-hover:scale-105 cursor-pointer">
              <div
                ref={(el: HTMLDivElement | null) => {
                  iconRefs.current[index] = el;
                }}
                className="text-white"
              >
                {index <= currentStep && step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-lightestGray rounded-lg p-5 mx-20 relative">
        {triangleLeft !== null && (
          <div
            className="absolute -top-8 w-0 h-0 
              border-l-[40px] border-l-transparent 
              border-r-[40px] border-r-transparent 
              border-b-[40px] border-b-lightestGray 
              transition-all duration-300"
            style={{ left: triangleLeft - 120 }}
          />
        )}

        <div ref={contentRef} className="flex gap-10 items-center">
          <img
            src={steps[currentStep].image}
            className="w-[301px] h-[199px] rounded-md"
            alt={steps[currentStep].title}
          />
          <div className="flex flex-col gap-2.5">
            <h1 className="text-red text-xl leading-[100%] font-semibold">
              Step {steps[currentStep].id}
            </h1>
            <span className="text-black text-3xl leading-[100%] font-semibold">
              {steps[currentStep].title}
            </span>
            <span className="text-lightGray text-xl leading-[100%] font-medium">
              {steps[currentStep].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
