import { Fleet } from "@/components/fleet/models/fleet.model";
import Image from "next/image";
import { notFound } from "next/navigation";
import { imageUrl } from "../../../../apiConfig";
import { getFleetBySingleId } from "../lib/fleet";

interface FleetPageProps {
  params: {
    id: string;
  };
}

const getFleetById = async (id: number): Promise<Fleet | null> => {
  try {
    const fleet = await getFleetBySingleId(id);
    return fleet ?? null;
  } catch (err) {
    console.error("Error fetching fleet:", err);
    return null;
  }
};

const Page = async ({ params }: FleetPageProps) => {
  const { id } = await params;
  const fleet = await getFleetById(+id);

  if (!fleet) {
    notFound();
  }

  const image = `${imageUrl}/${fleet.photo_path}`;

  return (
    <div className="bg-white py-[20px] px-[40px] rounded-md w-full my-20">
      <div className="my-5">
        <Image
          src={fleet.type == "equipment" ? String(fleet.photo_path) : image}
          width={455}
          height={200}
          alt={fleet.name}
          className="h-[200px] rounded-md object-cover"
        />
      </div>
      <div className="mb-5">
        <h1 className="font-medium text-lg text-lightGray">Cargo Ship</h1>
        <h1 className="font-bold text-xl leading-[100%] text-black">
          {fleet.name}
        </h1>
      </div>
      {fleet.type !== "equipment" ? (
        <div>
          <table className="w-full border border-lighterGray">
            <tbody>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Engine
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.main_engine}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Model
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.model_serial_no}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Rating
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.main_engine_rating}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Type of Vessel
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.type == "vessel"
                    ? `Cargo ` +
                      fleet.type.charAt(0).toUpperCase() +
                      fleet.type.slice(1)
                    : fleet.type.charAt(0).toUpperCase() + fleet.type.slice(1)}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  Load Capacity (DWT)
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.phil_dwt}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  GRT
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.gross_tonnage}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  LBP
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.length_lbp}
                </td>
              </tr>
              <tr>
                <td className="text-left text-base font-semibold text-black border border-lighterGray px-2.5 py-2">
                  LOA
                </td>
                <td className="text-center text-base font-medium text-black border border-lighterGray px-2.5 py-2">
                  {fleet.length_loa}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <table className="w-full border border-lighterGray">
            <tbody>
              {fleet.model_serial_no && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Model
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.model_serial_no}
                  </td>
                </tr>
              )}
              {fleet.unit_serial_no !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Unit Serial No
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.unit_serial_no}
                  </td>
                </tr>
              )}
              {fleet.main_engine && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Engine
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.main_engine}
                  </td>
                </tr>
              )}
              {fleet.horsepower && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Horsepower
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.horsepower} HP
                  </td>
                </tr>
              )}
              {fleet.rpm !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    RPM
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    @ {fleet.rpm} RPM
                  </td>
                </tr>
              )}
              {fleet.hydraulic && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.hydraulic}
                  </td>
                </tr>
              )}
              {fleet.hydraulic_system && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic System
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.hydraulic_system}
                  </td>
                </tr>
              )}
              {fleet.fuel_tank !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Fuel Tank Capacity
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.fuel_tank} L.
                  </td>
                </tr>
              )}
              {fleet.lube_oil_engine !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Lube Oil Engine
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.lube_oil_engine} L.
                  </td>
                </tr>
              )}

              {fleet.hydraulic_tank !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Hydraulic Tank
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.hydraulic_tank} L.
                  </td>
                </tr>
              )}
              {fleet.operating_weight !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Operating Weight
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.operating_weight?.toLocaleString()} kg.
                  </td>
                </tr>
              )}
              {fleet.bucket_capacity !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Bucket Capacity
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.bucket_capacity} cbm
                  </td>
                </tr>
              )}
              {fleet.max_digging_height !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Height
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.max_digging_height} mm
                  </td>
                </tr>
              )}
              {fleet.max_digging_reach !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Reach
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.max_digging_reach} mm
                  </td>
                </tr>
              )}
              {fleet.max_digging_depth !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Max Digging Depth
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.max_digging_depth} mm
                  </td>
                </tr>
              )}
              {fleet.overall_length !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Length
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.overall_length} mm
                  </td>
                </tr>
              )}
              {fleet.overall_width !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Width
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.overall_width} mm
                  </td>
                </tr>
              )}
              {fleet.overall_height_cab !== undefined && (
                <tr>
                  <td className="text-left text-sm font-semibold text-black border border-lighterGray px-2.5 py-2">
                    Overall Height (Cab)
                  </td>
                  <td className="text-center text-sm font-medium text-black border border-lighterGray px-2.5 py-2">
                    {fleet.overall_height_cab} mm
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
