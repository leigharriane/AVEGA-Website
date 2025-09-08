"use client";

import ArrowDownIcon from "../../../public/icons/ArrowDown";

interface GRTSortSelectProps {
  value: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
}

const GRTSortSelect = ({ value, onChange }: GRTSortSelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as "asc" | "desc")}
        className="w-full appearance-none py-2.5 pl-3 pr-8 border border-lighterGray rounded-xs text-sm text-lightGray focus:outline-none"
      >
        <option value="asc">GRT Ascending</option>
        <option value="desc">GRT Descending</option>
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <ArrowDownIcon />
      </span>
    </div>
  );
};

export default GRTSortSelect;
