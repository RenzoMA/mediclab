export interface Departamento {
    cod_ubigeo_department: string;
    id_department: string;
    name_department: string;
}

export interface Provincia {
    cod_ubigeo_province: string;
    id_department: string;
    id_province: string;
    name_province: string;
}

export interface Distrito {
    cod_ubigeo_district: string;
    id_district: string;
    id_province: string;
    name_district: string;
}

export interface Country {
    country_code: string;
    country_name: string;
}
