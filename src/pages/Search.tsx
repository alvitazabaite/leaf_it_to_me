import { SearchCombobox } from "@/components/SearchCombobox/SearchCombobox.tsx";

export default function Search() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span>Search</span>
      <SearchCombobox />
    </div>
  );
}
