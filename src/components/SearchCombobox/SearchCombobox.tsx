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
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="bg-white flex justify-start text-dark-gray h-[2.5625rem] w-[18.75rem] font-normal text-lg"
                >
                    {plantName ? plants.find(plant => plant.value === plantName)?.label : 'Search'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[18.75rem] p-0 bg-white text-dark-gray">
                <Command>
                    <CommandInput placeholder="Plant name" value={input} onValueChange={setInput} />
                    <CommandList>
                        {filteredPlants.length ? (
                            <CommandGroup>
                                {filteredPlants.map(plant => (
                                    <CommandItem
                                        key={plant.value}
                                        value={plant.value}
                                        onSelect={currentValue => {
                                            onChange(currentValue === plantName ? '' : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
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
