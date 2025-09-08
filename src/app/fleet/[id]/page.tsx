import { Fleet } from "@/components/fleet/models/fleet.model";
import { notFound } from "next/navigation";
import { apiKey, apiUrl, imageUrl } from "../../../../apiConfig";

interface FleetPageProps {
  params: {
    id: string;
  };
}

const getFleetById = async (id: number): Promise<Fleet | null> => {
  try {
    const response = await fetch(
      `${apiUrl}/website/master-vessels/${id}?key=${apiKey}`
    );
    if (!response.ok) throw new Error("Failed to fetch fleet data");
    const { data } = await response.json();
    return data as Fleet;
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
    <div className="bg-white py-[20px] px-[40px] rounded-md w-full">
      <div className="my-5">
        <img
          src={image}
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
    </div>
  );
};

export default Page;
