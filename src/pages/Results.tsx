import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center">
      <span>Search Results:</span>
      <span className="text-blue-400">{searchParams.get("plant")}</span>
      <Button className="mt-5" onClick={handleClick}>
        Go back
      </Button>
    </div>
  );
}
