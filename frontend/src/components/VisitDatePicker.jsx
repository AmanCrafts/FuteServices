import { useState } from 'react';
import { format, isValid, parse, startOfToday } from 'date-fns';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const parseDateValue = (value) => {
  if (!value) return undefined;
  const parsed = parse(value, 'yyyy-MM-dd', new Date());
  return isValid(parsed) ? parsed : undefined;
};

const VisitDatePicker = ({
  id,
  value,
  onChange,
  hasError = false,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}) => {
  const [open, setOpen] = useState(false);
  const today = startOfToday();
  const selectedDate = parseDateValue(value);

  const handleSelect = (date) => {
    if (!date || date < today) return;
    onChange(format(date, 'yyyy-MM-dd'));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          id={id}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'w-full h-auto justify-between px-4 py-3 text-sm sm:text-base font-normal',
            !value && 'text-brand-muted/60',
            hasError && 'border-red-400 bg-red-50/40 focus-visible:ring-red-400'
          )}
        >
          <span className="flex items-center gap-2 truncate">
            <CalendarIcon className="h-4 w-4 shrink-0 opacity-60" />
            {selectedDate ? format(selectedDate, 'PPP') : 'Select visit date'}
          </span>
          <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          defaultMonth={selectedDate ?? today}
          captionLayout="dropdown"
          fromDate={today}
          disabled={{ before: today }}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
};

export default VisitDatePicker;
