import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlantCardProps } from "@/components/PlantCard/types.ts";

export function PlantCard({ plantName, plantResponse }: PlantCardProps) {
  const checkIfUrl = (value: string) => {
    return (
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("ftp://") ||
      value.includes("www.")
    );
  };

  const cardOptions = [
    { label: "Water requirement", value: plantResponse.waterRequirement },
    { label: "Light requirement", value: plantResponse.lightRequirement },
    { label: "Soil type", value: plantResponse.soilType },
    { label: "Height", value: plantResponse.height },
    { label: "Layer", value: plantResponse.layer },
    { label: "Wikipedia", value: plantResponse.wikipedia },
    { label: "Description", value: plantResponse.description },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md font-serif">
          {plantName} (scientific name - {plantResponse.scientificName})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm font-serif space-y-1">
          {cardOptions.map(({ label, value }) => (
            <div key={label}>
              <span className="font-bold text-gray-700">{label}: </span>
              {checkIfUrl(value) ? (
                <a href={encodeURI(value)} className="text-blue-600 underline">
                  {value}
                </a>
              ) : (
                <span className=" text-gray-700">{value}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
