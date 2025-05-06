import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { getMockedPlant } from "@/api/mockApi.ts";
import { mockApiResponseOption } from "@/api/types.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [plantResponse, setPlantResponse] =
    useState<mockApiResponseOption | null>(null);
  const [plantName, setPlantName] = useState<string>("");

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const plantName = searchParams.get("plant");
    if (plantName) {
      const mockedPlantResponse = getMockedPlant(plantName);
      setPlantResponse(mockedPlantResponse);
      setPlantName(plantName);
    } else {
      setPlantResponse(null);
    }
  }, [searchParams]);

  return (
    <div>
      {plantResponse ? (
        <div className="flex flex-row items-start gap-4">
          <img
            src={plantResponse.images.thumb}
            alt={plantResponse.images.title}
            className="max-w-full h-auto rounded-lg"
          />
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{plantName}</CardTitle>
              {plantResponse.description && (
                <CardDescription className="text-sm">
                  {plantResponse.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 text-sm">
                <span>Slug:</span>
                <span>{plantResponse.slug}</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-medium">Edible parts:</span>
                <span>N/A</span>
              </div>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <span className="text-blue-400">No results found</span>
      )}
      <Button className="mt-5" onClick={handleClick}>
        Go back
      </Button>
    </div>
  );
}
