import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'vercel-geist-icons';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export default function Combobox({
  label,
  triggerValue,
  options,
  selected,
  onSelect,
  error,
}: {
  label?: string;
  triggerValue?: string;
  options: { value: string; label: string }[];
  error?: string;
  selected: string;
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 flex-1">
      {label && (
        <div className="text-gray-900 flex items-center justify-between gap-2 flex-wrap">
          {label}
        </div>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="md"
            className="justify-start bg-background-100 [&>span]:line-clamp-1"
            suffix={<ChevronDown className="opacity-50 ml-auto" />}
          >
            {triggerValue}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="!p-0 overflow-hidden">
          <Command>
            <CommandInput placeholder="Search project" />
            <CommandList>
              <CommandEmpty>No project found.</CommandEmpty>
              <CommandGroup>
                {options?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      onSelect(currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        selected === option.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <span className="text-red-800">{error}</span>}
    </div>
  );
}
