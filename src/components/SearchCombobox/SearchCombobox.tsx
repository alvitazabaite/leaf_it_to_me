import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchComboboxProps } from "@/components/SearchCombobox/SearchCombobox.types.ts";

export function SearchCombobox({
  plants,
  plantName,
  onChange,
}: SearchComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {plantName
            ? plants.find((plant) => plant.value === plantName)?.label
            : "Search plant ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Plant name" />
          <CommandList>
            <CommandEmpty>No plant found.</CommandEmpty>
            <CommandGroup>
              {plants.map((plant) => (
                <CommandItem
                  key={plant.value}
                  value={plant.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === plantName ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      plantName === plant.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {plant.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
