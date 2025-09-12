export interface Fleet {
    id?: number;
    company?: string;
    photo_path?: string;
    name: string;
    ex_name?: string;
    type: string;
    gross_tonnage: string;
    net_tonnage?: string;
    year_built?: string;
    builder?: string;
    main_engine?: string;
    main_engine_rating?: string;
    stat?: string;
    location?: Location;
    model_serial_no?: string;
    phil_dwt?: string;
    length_lbp?: string;
    length_loa?: string;

    unit_serial_no?: number;
    year_model?: number;

    horsepower?: string;
    rpm?: number;

    hydraulic?: string;
    hydraulic_system?: string;

    fuel_tank?: number;
    lube_oil_engine?: number;
    hydraulic_tank?: number;

    operating_weight?: number;
    bucket_capacity?: number;
    arm_length?: number;

    blade_type?: string;
    blade_capacity?: number;

    max_digging_height?: number;
    max_digging_reach?: number;
    max_digging_depth?: number;

    overall_length?: number;
    overall_width?: number;
    overall_height_cab?: number;
}