export interface PlantType {
    'id': number;
    'Scientific name': string;
    'Water requirement': string;
    'Light requirement': string;
    'Soil type': string;
    'Height': string;
    'Layer': string;
    'Description': string;
    'Wikipedia': string;
    'Images thumb': string;
    'Images title': string;
    'Name': string;
}

export type PlantNamesProps = {
    status: number;
    response?: string[] | null;
};

export type PlantProps = {
    status: number;
    response?: PlantType | null;
};
