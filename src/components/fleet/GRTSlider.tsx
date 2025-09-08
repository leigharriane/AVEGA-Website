"use client";

import React from "react";

interface GRTSliderProps {
  capacity: [number, number];
  onChange: (newCapacity: [number, number]) => void;
  max?: number;
  step?: number;
}

const GRTSlider = ({
  capacity,
  onChange,
  max = 5000,
  step = 50,
}: GRTSliderProps) => {
  const [min, maxValue] = capacity;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), maxValue - step);
    onChange([newMin, maxValue]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), min + step);
    onChange([min, newMax]);
  };

  const progressLeft = (min / max) * 100;
  const progressWidth = ((maxValue - min) / max) * 100;

  return (
    <div>
      <div className="text-base leading-[100%] font-[450] mb-2">
        {min.toLocaleString()} - {maxValue.toLocaleString()}
      </div>
      <div className="relative w-full h-6">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-lightestGray transform -translate-y-1/2 rounded-full" />
        <div
          className="absolute top-1/2 h-1 bg-red rounded-full transform -translate-y-1/2"
          style={{
            left: `${progressLeft}%`,
            width: `${progressWidth}%`,
          }}
        />
        <input
          type="range"
          min={0}
          max={max}
          step={step}
          value={min}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none h-6
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-gray-400
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none h-6
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-gray-400
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GRTSlider;
