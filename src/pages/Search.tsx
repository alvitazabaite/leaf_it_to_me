import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { PlantOption } from "@/components/SearchCombobox/types.ts";
import { plantsData } from "@/api/mockData.ts";

export default function Search() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span>Search</span>
      <SearchForm plants={plantsData as PlantOption[]} />
    </div>
  );
}
