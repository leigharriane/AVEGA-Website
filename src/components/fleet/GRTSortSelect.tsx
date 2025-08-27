"use client";

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
        className="w-full appearance-none py-2.5 pl-3 pr-8 bg-white border border-gray-300 rounded-xs text-sm text-gray-600 focus:outline-none"
      >
        <option value="asc">GRT Ascending</option>
        <option value="desc">GRT Descending</option>
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          className="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default GRTSortSelect;
