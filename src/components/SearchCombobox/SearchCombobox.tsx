"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Command } from "@/components/ui/command.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";

export function SearchCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[500px] justify-between"
        >
          {/*{value"Search..."}*/}
          <ChevronsUpDown className=" h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <input value={value} onChange={handleChange} />
          {/*<CommandList>*/}
          {/*<CommandEmpty>No framework found.</CommandEmpty>*/}
          {/*<CommandGroup>*/}
          {/*  {frameworks.map((framework) => (*/}
          {/*    <CommandItem*/}
          {/*      key={framework.value}*/}
          {/*      value={framework.value}*/}
          {/*      onSelect={(currentValue) => {*/}
          {/*        setValue(currentValue === value ? "" : currentValue);*/}
          {/*        setOpen(false);*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Check*/}
          {/*        className={cn(*/}
          {/*          "mr-2 h-4 w-4",*/}
          {/*          value === framework.value ? "opacity-100" : "opacity-0",*/}
          {/*        )}*/}
          {/*      />*/}
          {/*      {framework.label}*/}
          {/*    </CommandItem>*/}
          {/*  ))}*/}
          {/*</CommandGroup>*/}
          {/*</CommandList>*/}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
