import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { SearchProps } from "@/components/SearchCombobox/SearchCombobox.types.ts";

export default function Search({ plants }: SearchProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span>Search</span>
      <SearchForm plants={plants} />
    </div>
  );
}
