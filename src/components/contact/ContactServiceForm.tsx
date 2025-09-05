"use client";

import { useState } from "react";

export default function ContactServiceForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div>
      <h2 className="text-lg font-medium mb-5">Services</h2>
      <div className="space-y-3">
        <label className="inline-flex items-center space-x-3 mb-5">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
            onChange={() => handleServiceChange("ichs")}
          />
          <span className="text-lg leading-[100%]">
            Integrated Cargo Handling Service (ICHS)
          </span>
        </label>
        <div>
          <label className="inline-flex items-center space-x-3 mb-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
              onChange={() => handleServiceChange("tailored")}
            />
            <span className="text-lg leading-[100%]">
              Tailored Cargo Solutions
            </span>
          </label>
          <div className="ml-7 space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                onChange={() => handleServiceChange("shipping")}
              />
              <span className="text-base leading-[100%]">Shipping</span>
            </label>
            <div className="ml-4">
              <div className="text-base font-semibold mb-2">
                Cargo Type <span>(What can we ship?)</span>
              </div>
              <div className="ml-4 space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    onChange={() => handleServiceChange("bulk-cargo")}
                  />
                  <span className="text-base leading-[100%]">
                    Bulk Cargo Shipping
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    onChange={() => handleServiceChange("break-bulk")}
                  />
                  <span className="text-base leading-[100%]">
                    Break Bulk Cargo Shipping
                  </span>
                </label>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-base font-semibold mb-2">
                Shipping Options <span>(How can we help you move?)</span>
              </div>
              <div className="ml-4 space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    onChange={() => handleServiceChange("time-charter")}
                  />
                  <span className="text-base leading-[100%]">Time Charter</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    onChange={() => handleServiceChange("voyage-charter")}
                  />
                  <span className="text-base leading-[100%]">
                    Voyage Charter
                  </span>
                </label>
              </div>
            </div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                onChange={() => handleServiceChange("trucking")}
              />
              <span className="text-base leading-[100%]">Trucking</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                onChange={() => handleServiceChange("lighterage")}
              />
              <span className="text-base leading-[100%]">Lighterage</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                onChange={() => handleServiceChange("warehouse")}
              />
              <span className="text-base leading-[100%]">
                Warehouse Management
              </span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                onChange={() => handleServiceChange("equipment")}
              />
              <span className="text-base leading-[100%]">
                Equipment Rentals
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
