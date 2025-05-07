import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { PlantOption } from "@/components/SearchCombobox/types.ts";
import { plantsData } from "@/api/mockData.ts";

export default function Search() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SearchForm plants={plantsData as PlantOption[]} />
    </div>
  );
}
