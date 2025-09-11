import { Fleet } from "@/components/fleet/models/fleet.model";
import { apiKey, apiUrl } from "../../../../apiConfig";

// Fetch all fleet data from API
export async function getAllFleets(): Promise<Fleet[]> {
    const response = await fetch(`${apiUrl}/website/master-vessels?key=${apiKey}&limit=1000&stat=1`);
    if (!response.ok) {
        throw new Error("Failed to fetch fleet data");
    }
    const { data } = await response.json();
    return data as Fleet[];
}

// Static equipment list
const equipments: Fleet[] = [
    {
        id: 999,
        name: "KOMATSU EXCAVATOR PC228US",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 998,
        name: "KOMATSU EXCAVATOR PC350",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 997,
        name: "HITACHI EXCAVATOR ZAXIS 330-3",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 996,
        name: "DREDGING PIPES",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 995,
        name: "KOMATSU WHEEL LOADER WA430-5",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 994,
        name: "KOMATSU D85EX-15EO CRAWLER DOZER",
        type: "equipment",
        horsepower: "0",
        main_engine: "0",
        model_serial_no: "0",
        main_engine_rating: "0",
        phil_dwt: "0",
        gross_tonnage: "0",
        length_lbp: "0",
        length_loa: "0",
        photo_path: "/images/logo.png"
    },
];

// Get all fleets and static equipments (unchanged)
export async function getModifiedFleets(): Promise<Fleet[]> {
    const fleets = await getAllFleets();
    return [...fleets, ...equipments];
}

// Get a single fleet or equipment by ID (unchanged)
export async function getFleetBySingleId(id: number): Promise<Fleet | undefined> {
    const fleets = await getAllFleets();
    const matchedFleet = fleets.find((fleet) => fleet.id == id);
    if (matchedFleet) return matchedFleet;
    return equipments.find((equipment) => equipment.id == id);
}
