"use client";

import FleetTypeToggle from "@/components/fleet/FleetTypeToggle";
import GRTSlider from "@/components/fleet/GRTSlider";
import GRTSortSelect from "@/components/fleet/GRTSortSelect";
import { Fleet } from "@/components/fleet/models/fleet.model";
import FleetFilterSkeleton from "@/components/fleet/skeletons/FleetFilterSkeleton";
import FleetSkeleton from "@/components/fleet/skeletons/FleetSkeleton";
import RiseText from "@/components/RiseText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { apiKey, apiUrl, imageUrl } from "../../../apiConfig";

gsap.registerPlugin(ScrollTrigger);

export default function FleetPage() {
  const [fleetTypes, setFleetTypes] = useState<string[]>(["vessel"]);
  const [capacity, setCapacity] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");
  const [fleetList, setFleetList] = useState<Fleet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/website/master-vessels?key=${apiKey}&limit=1000&stat=1`
        );
        if (!response.ok) throw new Error("Failed to fetch fleet data");
        const { data } = await response.json();
        setFleetList(data);
      } catch (err) {
        console.log(`Error fetching fleet data: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const fleetData = useMemo(
    () =>
      fleetList.map((ship) => ({
        ...ship,
        grt: parseFloat(ship.gross_tonnage),
        image: `${imageUrl}/${ship.photo_path}`,
      })),
    [fleetList]
  );

  const filteredFleet = useMemo(() => {
    const data = fleetData.filter(
      (ship) =>
        fleetTypes.includes(ship.type) &&
        ship.grt >= capacity[0] &&
        ship.grt <= capacity[1]
    );

    return data.sort((a, b) =>
      sortBy === "asc" ? a.grt - b.grt : b.grt - a.grt
    );
  }, [fleetData, fleetTypes, capacity, sortBy]);

  const prevCapacityRef = useRef(capacity);

  useEffect(() => {
    const capacityChanged =
      prevCapacityRef.current[0] !== capacity[0] ||
      prevCapacityRef.current[1] !== capacity[1];

    prevCapacityRef.current = capacity;

    if (cardsRef.current.length > 0) {
      gsap.set(cardsRef.current, { autoAlpha: 1, y: 0 });

      if (!capacityChanged) {
        gsap.fromTo(
          cardsRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
          }
        );
      }
    }
  }, [filteredFleet]);

  return (
    <div className="flex flex-col my-20">
      <div className="flex flex-col py-5 px-5 lg:px-20">
        <RiseText
          text="Our Fleet"
          className="font-medium text-3xl leading-[100%]"
          start="top 80%"
          duration={1}
          stagger={0.02}
        />
        <RiseText
          text="A Diverse Fleet for Diverse Cargo Needs"
          className="font-medium text-base text-lightGray leading-[100%]"
          start="top 80%"
          duration={1}
          stagger={0.02}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-5 lg:px-20 pb-10">
        {loading ? (
          <FleetFilterSkeleton />
        ) : (
          <div className="w-full lg:max-w-[326px] lg:flex-shrink-0">
            <div className="border border-gray-200 shadow-sm rounded-md p-[32px] space-y-8">
              <div>
                <h3 className="font-medium text-base mb-[12px] leading-[100%] text-lightGray">
                  Fleet Type
                </h3>
                <FleetTypeToggle
                  availableTypes={Array.from(
                    new Set(fleetData.map((ship) => ship.type))
                  )}
                  selectedTypes={fleetTypes}
                  onToggle={(type) => {
                    setFleetTypes((prev) =>
                      prev.includes(type)
                        ? prev.filter((t) => t !== type)
                        : [...prev, type]
                    );
                  }}
                />
              </div>
              <div className="my-[30px]">
                <h3 className="font-medium text-base mb-[12px] leading-[100%] text-lightGray">
                  Gross Tonnage (GRT)
                </h3>
                <GRTSlider capacity={capacity} onChange={setCapacity} />
              </div>
              <div>
                <h3 className="font-medium text-base mb-[12px] leading-[100%] text-lightGray">
                  Sort by GRT
                </h3>
                <GRTSortSelect value={sortBy} onChange={setSortBy} />
              </div>
            </div>
          </div>
        )}
        <div className="flex-1">
          {loading ? (
            <FleetSkeleton />
          ) : filteredFleet.length === 0 ? (
            <p className="text-gray-500">No ships match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredFleet.map((ship, index) => (
                <div
                  key={ship.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="overflow-hidden bg-white opacity-0"
                >
                  <Link href={`/fleet/${ship.id}`}>
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={ship.image}
                        alt={ship.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </Link>
                  <div className="py-4">
                    <h3 className="font-bold text-base leading-[100%] mb-1">
                      {ship.name}
                    </h3>
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-lightGray text-base leading-[100%]">
                        GRT
                      </p>
                      <p className="text-black text-base leading-[100%]">
                        {parseFloat(ship.gross_tonnage).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-b border-lighterGray"></div>
    </div>
  );
}
