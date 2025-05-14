import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { getMockedPlant } from "@/api/mockApi.ts";
import { PlantCard } from "@/components/PlantCard/PlantCard.tsx";
import { plantOption } from "@/pages/types.ts";
import noPlantImage from "@/assets/images/no_plant.jpg";

export default function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialPlantResponse = {
    scientificName: "",
    waterRequirement: "",
    lightRequirement: "",
    soilType: "",
    height: "",
    layer: "",
    wikipedia: "",
    description: "",
    imagesThumb: "",
    imagesTitle: "",
  };
  const [plantResponse, setPlantResponse] =
    useState<plantOption>(initialPlantResponse);
  const [plantName, setPlantName] = useState<string>("");

  const handleClick = () => {
    navigate("/search");
  };

  useEffect(() => {
    const plantName = searchParams.get("plant");
    if (plantName) {
      const mockedPlantResponse = getMockedPlant(plantName);
      setPlantResponse(mockedPlantResponse as plantOption);
      setPlantName(plantName);
    } else {
      setPlantResponse(initialPlantResponse);
    }
  }, [initialPlantResponse, searchParams]);

  return (
    <div>
      {plantResponse ? (
        <div className="pl-5 pr-5 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-10 max-w-6xl">
            {plantResponse.imagesThumb && plantResponse.imagesTitle ? (
              <img
                src={plantResponse.imagesThumb}
                alt={plantResponse.imagesTitle}
              />
            ) : (
              <img
                className="object-scale-down rounded-md"
                src={noPlantImage}
                alt="No plant"
              />
            )}
            <PlantCard plantName={plantName} plantResponse={plantResponse} />
          </div>
          <Button className="mt-5" onClick={handleClick}>
            Go back
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <span>No results found</span>
          <Button className="mt-5" onClick={handleClick}>
            Go back
          </Button>
        </div>
      )}
    </div>
  );
}
