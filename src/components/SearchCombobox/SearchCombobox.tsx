import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SearchComboboxProps } from '@/components/SearchCombobox/types.ts';

export function SearchCombobox({ plants, plantName, onChange }: SearchComboboxProps) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const filteredPlants = plants.filter(plant => plant?.label?.toLowerCase().includes(input.toLowerCase()));

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                asChild
                className="h-[34px] md:h-[41px] w-[205px] md:w-[300px] flex border bg-white justify-start rounded-[10px] border-gray"
            >
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="text-[15px] md:text-lg leading-normal text-dark-gray font-normal pt-2 pb-2 pl-2"
                >
                    {plantName ? plants.find(plant => plant.value === plantName)?.label : 'Search'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[205px] md:w-[300px] flex border p-0 bg-white text-dark-gray rounded-[10px] border-gray">
                <Command>
                    <CommandInput
                        placeholder="Plant name"
                        value={input}
                        onValueChange={setInput}
                        className="text-base text-darker-gray"
                    />
                    <CommandList className="max-h-[200px] overflow-y-auto">
                        {filteredPlants.length ? (
                            <CommandGroup>
                                {filteredPlants.map(plant => (
                                    <CommandItem
                                        className="text-sm md:text-base text-darker-gray cursor-pointer hover:bg-gray-100"
                                        key={plant.value}
                                        value={plant.value}
                                        onSelect={currentValue => {
                                            onChange(currentValue === plantName ? '' : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'h-2 w-2',
                                                plantName === plant.value ? 'opacity-100' : 'opacity-0',
                                            )}
                                        />
                                        {plant.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ) : (
                            <CommandEmpty>No plant found.</CommandEmpty>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
