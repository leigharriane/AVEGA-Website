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
    horsepower?: string;
}