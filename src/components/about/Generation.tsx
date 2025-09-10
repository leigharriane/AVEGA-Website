"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Person {
  name: string;
  title: string;
  image: string;
}

interface Generation {
  id: string;
  title: string;
  people: Person[];
}

const generations: Generation[] = [
  {
    id: "first",
    title: "First Generation",
    people: [
      {
        name: "Alexander R. Vega Sr.",
        title: "Founder",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      },
    ],
  },
  {
    id: "second",
    title: "Second Generation",
    people: [
      {
        name: "Alec N. Vega",
        title: "Chairman of the Board",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      },
      {
        name: "Alexander R. Vega Jr.",
        title: "Vice Chairman",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      },
      {
        name: "Alison N. Vega",
        title: "President and CEO",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      },
    ],
  },
  {
    id: "third",
    title: "Third Generation",
    people: [
      {
        name: "Stephen Vega",
        title: "COO External",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      },
      {
        name: "Alec Daniel Sandy J. Vega",
        title: "COO Internal",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      },
    ],
  },
];

export default function Generations() {
  const [activeGeneration, setActiveGeneration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  const currentGenerationRef = useRef(0);

  const getSingleImageDimensions = () => {
    const width = "calc((100vw - 24px) / 4)"; 
    const height = `calc(${width})`; 
    return { width, height };
  };

  const getTwoImageDimensions = () => {
    const width = "calc((100vw - 24px) / 4)";
    const height = "calc((100vw - 24px) / 4)"; 
    return { width, height };
  };

  const getThreeImageDimensions = () => {
    const width = "calc((100vw - 24px) / 3)";
    const height = "calc((100vw - 24px) / 4)";
    return { width, height };
  };

  const singleImageDimensions = getSingleImageDimensions();
  const twoImageDimensions = getTwoImageDimensions();
  const threeImageDimensions = getThreeImageDimensions();

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = sectionsRef.current;
    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        if (index === 0) {
          gsap.set(section, { opacity: 1, y: 0 });
        } else {
          gsap.set(section, { opacity: 0, y: 50 });
        }
      });

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            if (currentGenerationRef.current !== index) {
              currentGenerationRef.current = index;
              setActiveGeneration(index);
              animateToGeneration(index);
            }
          },
          onEnterBack: () => {
            if (currentGenerationRef.current !== index) {
              currentGenerationRef.current = index;
              setActiveGeneration(index);
              animateToGeneration(index);
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animateToGeneration = (index: number) => {
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      if (i === index) {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        const cards = section.querySelectorAll(".person-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(section, {
          opacity: 0.3,
          y: i < index ? -30 : 30,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });
  };

  const handleGenerationClick = (index: number) => {
    currentGenerationRef.current = index;
    setActiveGeneration(index);
    animateToGeneration(index);

    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="relative bg-white w-full min-h-screen">
      <nav ref={navRef} className="sticky top-8 left-8 z-50 mb-8">
        <div className="flex gap-1 bg-white rounded-full shadow-lg border border-gray-200 w-fit">
          {generations.map((generation, index) => (
            <button
              key={generation.id}
              onClick={() => handleGenerationClick(index)}
              className={`rounded-full px-10 py-5 text-2xl font-medium transition-all duration-300 border-none cursor-pointer ${
                activeGeneration === index
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-transparent"
              }`}
            >
              {generation.title}
            </button>
          ))}
        </div>
      </nav>

      <div ref={containerRef} className="w-full">
        {generations.map((generation, index) => (
          <div
            key={generation.id}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className={`min-h-screen flex items-center justify-center py-16 w-full px-0`}
          >
            {index === 0 && (
              <div className="flex w-full justify-end">
                <div
                  className="person-card"
                  style={{ width: singleImageDimensions.width }}
                >
                  <div
                    className="relative mb-4 rounded-2xl overflow-hidden bg-gray-200 w-full"
                    style={{ height: singleImageDimensions.height }}
                  >
                    <Image
                      src={generation.people[0].image || "/placeholder.svg"}
                      alt={generation.people[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-4xl font-medium text-gray-900 mb-1">
                    {generation.people[0].name}
                  </h3>
                  <p className="text-gray-500 text-4xl font-medium">
                    {generation.people[0].title}
                  </p>
                </div>
              </div>
            )}

            {index === 1 && (
              <div className="flex w-full gap-3 px-0">
                {generation.people.map((person, personIndex) => (
                  <div
                    key={personIndex}
                    className="person-card flex-1"
                  >
                    <div
                      className="relative mb-4 rounded-2xl overflow-hidden bg-gray-200 w-full"
                      style={{ height: threeImageDimensions.height }}
                    >
                      <Image
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-4xl font-medium text-gray-900 mb-1">
                      {person.name}
                    </h3>
                    <p className="text-gray-500 text-4xl font-medium">{person.title}</p>
                  </div>
                ))}
              </div>
            )}

            {index === 2 && (
              <div className="flex w-full gap-3 justify-end">
                {generation.people.map((person, personIndex) => (
                  <div
                    key={personIndex}
                    className="person-card"
                    style={{ width: twoImageDimensions.width }}
                  >
                    <div
                      className="relative mb-4 rounded-lg overflow-hidden bg-gray-200 w-full"
                      style={{ height: twoImageDimensions.height }}
                    >
                      <Image
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-4xl font-medium text-gray-900 mb-1">
                      {person.name}
                    </h3>
                    <p className="text-gray-500 text-4xl font-medium">{person.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
