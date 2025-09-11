"use client";

import Image from "next/image";
import { imageUrl } from "../../../../apiConfig";
import { Fleet } from "../models/fleet.model";

const FleetDetails = ({
  id,
  name,
  type,
  gross_tonnage,
  photo_path,
  main_engine,
  model_serial_no,
  main_engine_rating,
  phil_dwt,
  length_lbp,
  length_loa,
  horsepower
}: Fleet) => {
  const handleLearnMore = () => {
    window.location.href = `/fleet/${id}`;
  };

  const image = `${imageUrl}/${photo_path}`;

  return (
    <div className="bg-white pb-[20px] px-[40px] rounded-md w-full">
      <div className="mb-5">
        <Image
          src={type == "equipment" ? String(photo_path) : image}
          width={455}
          height={200}
          alt={name}
          className="h-[200px] w-full rounded-md object-cover"
        />
      </div>
      <div className="mb-5">
        <h1 className="font-medium text-lg text-lightGray">
          {type.toUpperCase()}
        </h1>
        <h1 className="font-bold text-xl leading-[100%] text-black">{name}</h1>
      </div>
      {type !== "equipment" ? (
        <div>
          <table className="w-full border border-lighterGray">
            <tbody>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Engine
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {main_engine}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Model
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {model_serial_no}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Rating
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {main_engine_rating}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Type of Vessel
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {type == "vessel"
                    ? `Cargo ` + type.charAt(0).toUpperCase() + type.slice(1)
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Load Capacity (DWT)
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {phil_dwt}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  GRT
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {gross_tonnage}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  LBP
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {length_lbp}
                </td>
              </tr>
              <tr>
                <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                  LOA
                </td>
                <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                  {length_loa}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={handleLearnMore}
          className="bg-red text-white text-sm font-normal px-5 py-2.5 rounded-sm mt-5 cursor-pointer flex items-center"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FleetDetails;
