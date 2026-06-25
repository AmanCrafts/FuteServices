import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

export function Popover(props) {
  return <PopoverPrimitive.Root {...props} />;
}

export function PopoverTrigger(props) {
  return <PopoverPrimitive.Trigger {...props} />;
}

export function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 rounded-xl border border-slate-200 bg-white shadow-lg outline-none',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
