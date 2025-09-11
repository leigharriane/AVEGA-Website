import FleetDetails from "@/components/fleet/FleetDetails";
import Modal from "@/components/fleet/Modal";
import { Fleet } from "@/components/fleet/models/fleet.model";
import { notFound } from "next/navigation";
import { apiKey, apiUrl } from "../../../../../apiConfig";

interface FleetModalPageProps {
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
    const fleet = data as Fleet;

    const changes: Record<number, Partial<Fleet>> = {
      75: { type: "equipment", name: "CUTTER' SUCTION DREDGER" },
      48: { type: "equipment" },
      56: { type: "equipment", name: "SELF PROPELLED CRANE BARGE" },
    };

    if (fleet.id !== undefined && changes[fleet.id]) {
      return { ...fleet, ...changes[fleet.id] };
    }

    return fleet;
  } catch (err) {
    console.error("Error fetching fleet:", err);
    return null;
  }
};

const FleetModalPage = async ({ params }: FleetModalPageProps) => {
  const { id } = await params;
  const fleet = await getFleetById(+id);

  if (!fleet) {
    notFound();
  }

  return (
    <Modal>
      <FleetDetails
        id={fleet.id}
        name={fleet.name}
        type={fleet.type}
        gross_tonnage={fleet.gross_tonnage}
        photo_path={fleet.photo_path}
        main_engine={fleet.main_engine}
        model_serial_no={fleet.model_serial_no}
        main_engine_rating={fleet.main_engine_rating}
        phil_dwt={fleet.phil_dwt}
        length_lbp={fleet.length_lbp}
        length_loa={fleet.length_loa}
      />
    </Modal>
  );
};

export default FleetModalPage;
