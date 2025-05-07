import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { getMockedPlant } from "@/api/mockApi.ts";
import { mockApiResponseOption } from "@/api/types.ts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [plantResponse, setPlantResponse] =
    useState<mockApiResponseOption | null>(null);
  const [plantName, setPlantName] = useState<string>("");

  const handleClick = () => {
    navigate("/search");
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

  const checkIfUrl = (value: string) => {
    return (
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("ftp://") ||
      value.includes("www.")
    );
  };

  return (
    <div>
      {plantResponse ? (
        <div className="pl-5 pr-5 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-10 max-w-6xl">
            <img
              className="object-scale-down rounded-md"
              src={plantResponse.images.thumb}
              alt={plantResponse.images.title}
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-md font-serif">
                  {plantName} (scientific name - {plantResponse.scientific_name}
                  )
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-serif space-y-1">
                  {plantResponse.data.map((plantItem, index) => (
                    <div key={index}>
                      <span className="font-bold text-gray-700">
                        {plantItem.key}:{" "}
                      </span>
                      {checkIfUrl(plantItem.value) ? (
                        <a
                          href={encodeURI(plantItem.value)}
                          className="text-blue-600 underline"
                        >
                          {plantItem.value}
                        </a>
                      ) : (
                        <span className=" text-gray-700">
                          {plantItem.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
