import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { PlantOption } from "@/components/SearchCombobox/types.ts";
import { plantsData } from "@/api/mocks.ts";

export default function Search() {
  const plants: PlantOption[] = plantsData;

  return (
    <div className="flex flex-col items-center justify-center">
      <span>Search</span>
      <SearchForm plants={plants} />
    </div>
  );
}
