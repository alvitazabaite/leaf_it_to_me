export type SearchProps = {
  plants: PlantOption[];
};

export type SearchComboboxProps = {
  plants: PlantOption[];
  plantName: string;
  onChange: (value: string) => void;
};

export type PlantOption = {
  value: string;
  label?: string;
};
