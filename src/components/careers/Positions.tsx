"use client";

import { applications } from "@/app/careers/jobsData";
import Link from "next/link";
import { useState } from "react";
import CheckIcon from "../../../public/icons/Check";
import ChevronDownIcon from "../../../public/icons/ChevronDown";
import ChevronUpIcon from "../../../public/icons/ChevronUp";
import PlusIcon from "../../../public/icons/Plus";

const Positions = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

  const filterOptions = [
    { label: "All", value: "All", color: "bg-gray-200" },
    { label: "Sea-Based Careers", value: "Sea-Based", color: "bg-red-500" },
    { label: "Land-Based Careers", value: "Land-Based", color: "bg-red-200" },
    { label: "Cebu, Philippines", value: "Cebu", color: "bg-gray-200" },
    { label: "Manila, Philippines", value: "Manila", color: "bg-gray-200" },
  ];

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) => {
      const isAll = value === "All";
      const hasAll = prev.includes("All");

      if (isAll) {
        if (hasAll && prev.length === 1) return ["Sea-Based"];
        return ["All"];
      }

      const base = prev.filter((f) => f !== "All");
      const next = base.includes(value)
        ? base.filter((f) => f !== value)
        : [...base, value];

      return next.length ? next : ["All"];
    });
  };

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredApplications = applications.filter((app) => {
    if (activeFilters.length === 0) return false;
    return activeFilters.some((filter) => {
      if (filter === "Sea-Based" || filter === "Land-Based") {
        return app.category === filter;
      }
      if (filter === "Cebu" || filter === "Manila") {
        return app.location.includes(filter);
      }
      if (filter === "All") {
        return true;
      }
      return false;
    });
  });

  return (
    <div className="py-10">
      {/* Filters */}
      <div className="mb-8">
        <h2 className="text-base font-medium text-lightGray mb-3">Filters</h2>
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => toggleFilter(filter.value)}
              className={`flex gap-1 items-center px-4 py-[6px] rounded-full text-sm font-medium transition-colors ${
                activeFilters.includes(filter.value)
                  ? "bg-red text-white"
                  : "bg-lightestGray text-lightGray"
              }`}
            >
              {activeFilters.includes(filter.value) ? (
                <CheckIcon />
              ) : (
                <PlusIcon />
              )}
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 gap-4 py-8 border-b border-lighterGray font-medium text-lightGray text-base">
        <div>Position</div>
        <div>Location</div>
        <div>Employment Type</div>
        <div>Category</div>
        <div></div>
      </div>

      {/* Job List */}
      {filteredApplications.map((app) => (
        <div
          key={app.id}
          className="border-b border-lighterGray last:border-b-0"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 py-6 md:py-8 hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => toggleRow(app.id)}
          >
            <div className="font-medium text-black text-base">
              <span className="md:hidden font-semibold text-lightGray block">
                Position:
              </span>
              {app.position}
            </div>
            <div className="font-medium text-black text-base">
              <span className="md:hidden font-semibold text-lightGray block">
                Location:
              </span>
              {app.location}
            </div>
            <div className="font-medium text-black text-base">
              <span className="md:hidden font-semibold text-lightGray block">
                Type:
              </span>
              {app.type}
            </div>
            <div className="font-medium text-black text-base">
              <span className="md:hidden font-semibold text-lightGray block">
                Category:
              </span>
              {app.category}
            </div>
            <div className="flex justify-end items-center">
              {expandedRow === app.id ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </div>

          {/* Expanded Content */}
          {expandedRow === app.id && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pb-6">
              <div className="hidden md:block" />
              <div className="col-span-4">
                <div
                  className="prose prose-sm max-w-none text-black [&>p]:mb-4 [&>h4]:font-medium [&>h4]:text-black [&>h4]:mt-6 [&>h4]:mb-3 [&>ul]:space-y-2 [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:before:content-['•'] [&>ul>li]:before:text-black [&>ul>li]:before:mr-2"
                  dangerouslySetInnerHTML={{ __html: app.description }}
                />
                <Link
                  href={`/careers/${app.id}`}
                  className="font-semibold text-base inline-block my-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #A30101 0%, #FF0000 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    borderBottom: "2px solid",
                    borderImage:
                      "linear-gradient(to right, #A30101, #FF0000) 1",
                    paddingBottom: "2px",
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* No Results */}
      {filteredApplications.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No positions match the selected filters.
        </div>
      )}
    </div>
  );
};

export default Positions;
