import FleetDetails from "@/components/fleet/FleetDetails";
import Modal from "@/components/fleet/Modal";
import { Fleet } from "@/components/fleet/models/fleet.model";
import { notFound } from "next/navigation";
import { getFleetBySingleId } from "../../lib/fleet";

interface FleetModalPageProps {
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

const FleetModalPage = async ({ params }: FleetModalPageProps) => {
  const { id } = await params;
  const fleet = await getFleetById(+id);

  if (!fleet) {
    notFound();
  }

  return (
      <Modal>
        <FleetDetails fleet={fleet} />
      </Modal>
  );
};

export default FleetModalPage;
