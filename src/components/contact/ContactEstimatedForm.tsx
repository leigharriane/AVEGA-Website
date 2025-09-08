import { useState } from "react";

const cargoOptions = [
  { value: "up-to-500", label: "Up to 500 MT" },
  { value: "501-1000", label: "501 to 1000 MT" },
  { value: "1001-2000", label: "1001 to 2000 MT" },
  { value: "more-than-2000", label: "More than 2000 MT" },
];

const ContactEstimatedForm = () => {
  const [cargoVolume, setCargoVolume] = useState("");

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-5">Estimated Cargo Volume</h2>
      <div className="flex flex-wrap gap-3">
        {cargoOptions.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setCargoVolume(value)}
            className={`flex items-center px-4 rounded-full border text-sm font-medium transition-colors ${
              cargoVolume === value
                ? "bg-red border-red text-white"
                : "bg-lightestGray border-lightestGray text-lightGray hover:bg-red hover:text-white"
            }`}
          >
            <span className="mr-2 text-lg">+</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactEstimatedForm;
