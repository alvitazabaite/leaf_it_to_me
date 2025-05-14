import { apiResponseData } from "@/api/mockData.ts";

export function getMockedPlant(plantName: string) {
  const plant = apiResponseData?.[plantName];
  if (!plant) return null;
  return {
    scientificName: plant.scientific_name,
    waterRequirement: getOptionValue(plant.data, "Water requirement"),
    lightRequirement: getOptionValue(plant.data, "Light requirement"),
    soilType: getOptionValue(plant.data, "Soil type"),
    height: getOptionValue(plant.data, "Height"),
    layer: getOptionValue(plant.data, "Layer"),
    wikipedia: getOptionValue(plant.data, "Wikipedia"),
    description: plant.description,
    imagesThumb: plant.images.thumb || null,
    imagesTitle: plant.images.title || null,
  };
}

function getOptionValue(
  plantData: { key: string; value: string }[],
  optionKey: string,
): string | null {
  const option = plantData.find((item) => item.key === optionKey);
  return option ? option.value : "";
}
