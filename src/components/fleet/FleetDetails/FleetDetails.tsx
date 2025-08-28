"use client";

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
}: Fleet) => {
  const handleLearnMore = () => {
    window.location.href = `/fleet/${id}`;
  };

  const image = `https://abas.avegabros.org/assets/uploads/operations/vessels/${photo_path}`;

  return (
    <div className="bg-white pb-[20px] px-[40px] rounded-2xl w-full">
      <div className="mb-5">
        <img
          src={image}
          width={455}
          height={200}
          alt={name}
          className="h-[200px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="mb-5">
        <h1 className="font-medium text-[22.5px] text-[#787878]">Cargo Ship</h1>
        <h1 className="font-bold text-[28.13px] leading-[100%] text-[#171717]">
          {name}
        </h1>
      </div>
      <div>
        <table className="w-full border border-[#BFBFBF]">
          <tbody>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Engine
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {main_engine}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Model
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {model_serial_no}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Rating
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {main_engine_rating}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Type of Vessel
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {type == "vessel"
                  ? `Cargo ` + type.charAt(0).toUpperCase() + type.slice(1)
                  : type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Load Capacity (DWT)
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {phil_dwt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                GRT
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {gross_tonnage}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                LBP
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {length_lbp}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                LOA
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {length_loa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLearnMore}
          className="bg-[#D80001] text-white text-[14px] font-normal py-2 px-3 rounded-2xl mt-5 cursor-pointer flex items-center"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FleetDetails;
