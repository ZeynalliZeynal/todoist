import { cn } from '@/lib/utils';
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
} from '@everest-ui/react-dropdown-menu';

export const DropdownMenu = DropdownMenuPrimitive;

export function DropdownMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTriggerPrimitive>) {
  return (
    <DropdownMenuTriggerPrimitive
      className={cn(
        'rounded-md bg-background-200 border px-3 h-10 text-foreground',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContentPrimitive>) {
  return (
    <DropdownMenuContentPrimitive
      className={cn(
        'bg-background-100 rounded-xl border p-2 w-48 outline-none data-[state=open]:animate-in duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItemPrimitive>) {
  return (
    <DropdownMenuItemPrimitive
      className={cn(
        'justify-between px-2 rounded-md cursor-pointer h-10 align-middle transition focus:bg-gray-alpha-100 outline-none data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
        className
      )}
      {...props}
    />
  );
}
