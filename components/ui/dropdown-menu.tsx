import { cn } from '@/lib/utils';
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuGroup as DropdownMenuGroupPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
  DropdownMenuLabel as DropdownMenuLabelPrimitive,
  DropdownMenuSeparator as DropdownMenuSeparatorPrimitive,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
} from '@everest-ui/react-dropdown-menu';

export const DropdownMenu = DropdownMenuPrimitive;

export function DropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownMenuTriggerPrimitive>,
) {
  return <DropdownMenuTriggerPrimitive {...props} />;
}

export function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContentPrimitive>) {
  return (
    <DropdownMenuContentPrimitive
      className={cn(
        'bg-background-100 rounded-xl border p-2 w-48 my-3 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      style={{
        animationDuration: '300ms',
      }}
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
        'flex items-center justify-between px-2 rounded-md h-10 align-middle transition focus:bg-gray-alpha-100 !outline-none focus:ring-0 focus:ring-offset-0 data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
        !props.asChild && 'cursor-default',
        className,
      )}
      {...props}
    />
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparatorPrimitive>) {
  return (
    <DropdownMenuSeparatorPrimitive
      className={cn('-mx-2 my-2 h-px bg-gray-alpha-400', className)}
      {...props}
    />
  );
}
export function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabelPrimitive>) {
  return (
    <DropdownMenuLabelPrimitive
      className={cn('bg-background-100 px-2 h-10 flex items-center', className)}
      {...props}
    />
  );
}
export const DropdownMenuGroup = DropdownMenuGroupPrimitive;
