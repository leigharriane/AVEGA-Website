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
        gross_tonnage: "0",
        photo_path: "/images/logo.png",
        model_serial_no: "PC228US-3EO",
        unit_serial_no: 41079,
        main_engine: "SAA6D107E - 1",
        horsepower: "155",
        rpm: 2000,
        hydraulic: "HydrauMind type",
        hydraulic_system: "Variable displacement piston type main pump",
        fuel_tank: 320,
        lube_oil_engine: 23,
        hydraulic_tank: 126,
        operating_weight: 21900,
        bucket_capacity: 0.80,
        max_digging_height: 10700,
        max_digging_reach: 9875,
        max_digging_depth: 6620,
        overall_length: 8700,
        overall_width: 2980,
        overall_height_cab: 3035,
    },
    {
        id: 998,
        name: "KOMATSU EXCAVATOR PC350",
        type: "equipment",
        gross_tonnage: "0",
        photo_path: "/images/logo.png",
        model_serial_no: "PC350-7EO",
        unit_serial_no: 30097,
        main_engine: "SAA6D114E-3",
        horsepower: "260",
        rpm: 1950,
        hydraulic: "HydrauMind hydraulic system",
        hydraulic_system: "Variable displacement piston type main pump",
        fuel_tank: 605,
        lube_oil_engine: 35,
        hydraulic_tank: 188,
        operating_weight: 31600,
        bucket_capacity: 1.40,
        max_digging_height: 10210,
        max_digging_reach: 10920,
        max_digging_depth: 7380,
        overall_length: 11140,
        overall_width: 3190,
        overall_height_cab: 3130,
    },
    {
        id: 997,
        name: "HITACHI EXCAVATOR ZAXIS 330-3",
        type: "equipment",
        gross_tonnage: "0",
        photo_path: "/images/logo.png",
        model_serial_no: "ZAXIS 330-3",
        unit_serial_no: 53465,
        main_engine: "Isuzu AH-6HK1XYSA-01",
        horsepower: "275",
        rpm: 1900,
        hydraulic: "Main pump",
        hydraulic_system: "2 variable displacement axial piston pump",
        fuel_tank: 630,
        lube_oil_engine: 41,
        hydraulic_tank: 298,
        operating_weight: 31600,
        bucket_capacity: 1.40,
        arm_length: 3.20,
        max_digging_height: 10360,
        max_digging_reach: 10890,
        max_digging_depth: 7380,
        overall_length: 11000,
        overall_width: 3190,
        overall_height_cab: 3160,
    },
    {
        id: 996,
        name: "DREDGING PIPES",
        type: "equipment",
        gross_tonnage: "0",
        photo_path: "/images/logo.png"
    },
    {
        id: 995,
        name: "KOMATSU WHEEL LOADER WA430-5",
        type: "equipment",
        gross_tonnage: "0",
        photo_path: "/images/logo.png",
        model_serial_no: "WA430-5",
        unit_serial_no: 61069,
        main_engine: "SAA6D125E-3-B",
        horsepower: "234",
        rpm: 2000,
        hydraulic: "Dual speed hydraulic system",
        hydraulic_system: "Gear type main pumps",
        fuel_tank: 343,
        lube_oil_engine: 45,
        hydraulic_tank: 186,
        operating_weight: 18415,
        bucket_capacity: 3.70,
        overall_length: 8375,
        overall_width: 2820,
        overall_height_cab: 3380,
    },
    {
        id: 994,
        name: "KOMATSU D85EX-15EO CRAWLER DOZER",
        type: "equipment",
        gross_tonnage: "0",
        photo_path: "/images/logo.png",
        model_serial_no: "D85EX-15EO",
        unit_serial_no: 11984,
        year_model: 2012,
        main_engine: "SAA6D125E-5 (EN: 572245)",
        horsepower: "266",
        rpm: 1900,
        operating_weight: 28000,
        blade_type: "Semi-U",
        blade_capacity: 7,
        overall_length: 7255,
        overall_width: 3635,
        overall_height_cab: 3330,
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
