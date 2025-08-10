export interface PlantType {
    'id': number;
    'Scientific name': string;
    'Water requirement': string;
    'Light requirement': string;
    'Soil type': string;
    'Layer': string;
    'Wikipedia': string;
    'Description': string;
    'Images thumb': string;
    'Images title': string;
    'Name': string;
    'Height': string;
}

export type PlantNamesProps = {
    status: number;
    response?: string[] | null;
};

export type PlantProps = {
    status: number;
    response?: PlantType | null;
};
