import { apiResponseData } from "@/api/mockData.ts";

export function getMockedPlant(plantName: string) {
  return apiResponseData?.[plantName] || null;
}
