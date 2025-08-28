import FleetDetails from "@/components/fleet/FleetDetails";
import ModalWrapper from "@/components/fleet/ModalWrapper";
import { Fleet } from "@/components/fleet/models/fleet.model";
import { notFound } from "next/navigation";

interface FleetModalPageProps {
  params: {
    id: string;
  };
}

const getFleetById = async (id: number): Promise<Fleet | null> => {
  try {
    const response = await fetch(
      `https://api.avegabros.org/website/master-vessels/${id}?key=tMxLOAEnad9heg7fpIZWQrm2F&`
    );
    if (!response.ok) throw new Error("Failed to fetch fleet data");
    const { data } = await response.json();
    return data as Fleet;
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
    <ModalWrapper>
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
    </ModalWrapper>
  );
};

export default FleetModalPage;
