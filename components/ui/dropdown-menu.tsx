'use client';

import { cn } from '@/lib/utils';
import { DropdownMenu as DropdownMenuPrimitive } from '@everest-ui/react-dropdown-menu';

export const DropdownMenu = DropdownMenuPrimitive;

export function DropdownMenuTrigger(
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
) {
  return <DropdownMenuPrimitive.Trigger {...props} />;
}

export function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Content>) {
  return (
    <DropdownMenu.Content
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
  children,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Item>) {
  return (
    <DropdownMenu.Item
      className={cn(
        'flex items-center px-2 justify-between rounded-md h-10 align-middle transition focus:bg-gray-alpha-100 !outline-none focus:ring-0 focus:ring-offset-0 data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
        !props.asChild && 'cursor-default',
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Separator>) {
  return (
    <DropdownMenu.Separator
      className={cn('-mx-2 my-2 h-px bg-gray-alpha-400', className)}
      {...props}
    />
  );
}
export function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Separator>) {
  return (
    <DropdownMenu.Separator
      className={cn('bg-background-100 px-2 h-10 flex items-center', className)}
      {...props}
    />
  );
}
export const DropdownMenuGroup = DropdownMenu.Group;
