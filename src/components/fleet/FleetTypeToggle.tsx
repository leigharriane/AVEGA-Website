"use client";

import CheckIcon from "../../../public/icons/Check";
import PlusIcon from "../../../public/icons/Plus";

interface FleetTypeToggleProps {
  availableTypes: string[];
  selectedTypes: string[];
  onToggle: (type: string) => void;
}

const FleetTypeToggle = ({
  availableTypes,
  selectedTypes,
  onToggle,
}: FleetTypeToggleProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {availableTypes.map((type) => {
        const isSelected = selectedTypes.includes(type);
        return (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className={`flex items-center gap-2 px-[18px] py-[6px] leading-[100%] rounded-full text-sm font-medium border transition ${
              isSelected
                ? "bg-red text-white border-red"
                : "border-lighterGray text-lightGray hover:border-red hover:text-red"
            }`}
          >
            <span>{isSelected ? <CheckIcon /> : <PlusIcon />}</span>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FleetTypeToggle;
