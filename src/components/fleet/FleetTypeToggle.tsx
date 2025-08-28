"use client";

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
            <span>
              {isSelected ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </span>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FleetTypeToggle;
