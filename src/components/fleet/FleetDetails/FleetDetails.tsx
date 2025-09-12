"use client";

import Image from "next/image";
import { imageUrl } from "../../../../apiConfig";
import { Fleet } from "../models/fleet.model";

interface FleetDetailsProps {
  fleet: Fleet;
}

const FleetDetails = ({ fleet }: FleetDetailsProps) => {
  const {
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
    horsepower,
    unit_serial_no,
    rpm,
    hydraulic,
    hydraulic_system,
    fuel_tank,
    lube_oil_engine,
    hydraulic_tank,
    operating_weight,
    bucket_capacity,
    max_digging_height,
    max_digging_reach,
    max_digging_depth,
    overall_length,
    overall_width,
    overall_height_cab,
  } = fleet;

  const handleLearnMore = () => {
    window.location.href = `/fleet/${id}`;
  };

  const image = `${imageUrl}/${photo_path}`;

  return (
    <div className="bg-white px-[30px] rounded-md w-full">
      <div className="mb-5">
        <Image
          src={type === "equipment" ? String(photo_path) : image}
          width={455}
          height={200}
          alt={name}
          className="h-[200px] w-full rounded-md object-cover"
        />
      </div>
      <div className="mb-5">
        <h1 className="font-medium text-base text-lightGray">
          {type.toUpperCase()}
        </h1>
        <h1 className="font-bold text-lg leading-[100%] text-black">{name}</h1>
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
                  {type === "vessel"
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
          <table className="w-full border border-lighterGray">
            <tbody>
              {model_serial_no && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Model
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {model_serial_no}
                  </td>
                </tr>
              )}
              {unit_serial_no !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Unit Serial No
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {unit_serial_no}
                  </td>
                </tr>
              )}
              {main_engine && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Engine
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {main_engine}
                  </td>
                </tr>
              )}
              {horsepower && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Horsepower
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {horsepower} HP
                  </td>
                </tr>
              )}
              {rpm !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    RPM
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    @ {rpm} RPM
                  </td>
                </tr>
              )}
              {hydraulic && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {hydraulic}
                  </td>
                </tr>
              )}
              {hydraulic_system && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic System
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {hydraulic_system}
                  </td>
                </tr>
              )}
              {fuel_tank !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Fuel Tank Capacity
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fuel_tank} L.
                  </td>
                </tr>
              )}
              {lube_oil_engine !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Lube Oil Engine
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {lube_oil_engine} L.
                  </td>
                </tr>
              )}

              {hydraulic_tank !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic Tank
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {hydraulic_tank} L.
                  </td>
                </tr>
              )}
              {operating_weight !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Operating Weight
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {operating_weight?.toLocaleString()} kg.
                  </td>
                </tr>
              )}
              {bucket_capacity !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Bucket Capacity
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {bucket_capacity} cbm
                  </td>
                </tr>
              )}
              {max_digging_height !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Height
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {max_digging_height} mm
                  </td>
                </tr>
              )}
              {max_digging_reach !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Reach
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {max_digging_reach} mm
                  </td>
                </tr>
              )}
              {max_digging_depth !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Depth
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {max_digging_depth} mm
                  </td>
                </tr>
              )}
              {overall_length !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Length
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {overall_length} mm
                  </td>
                </tr>
              )}
              {overall_width !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Width
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {overall_width} mm
                  </td>
                </tr>
              )}
              {overall_height_cab !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Height (Cab)
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {overall_height_cab} mm
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
