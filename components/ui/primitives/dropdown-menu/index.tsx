import {
  Popper,
  PopperContent,
  PopperGroup,
  PopperItem,
  PopperLabel,
  PopperSeparator,
  PopperSub,
  PopperSubContent,
  PopperSubTrigger,
  PopperTrigger,
} from '@/components/ui/primitives/popper';
import {
  PopperContentProps,
  PopperItemProps,
  PopperSubContentProps,
  PopperTriggerProps,
} from '@/components/ui/primitives/popper/popper.types';
import { ComponentProps } from 'react';

export function DropdownMenu(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return <Popper {...props} />;
}

export function DropdownMenuTrigger(
  props: PopperTriggerProps,
): React.ReactElement {
  return <PopperTrigger {...props} />;
}

export function DropdownMenuItem(props: PopperItemProps): React.ReactElement {
  return <PopperItem {...props} />;
}

export function DropdownMenuContent(
  props: PopperContentProps,
): React.ReactElement {
  return <PopperContent {...props} />;
}

export function DropdownMenuSeparator(
  props: ComponentProps<'div'>,
): React.ReactElement {
  return <PopperSeparator {...props} />;
}

export function DropdownMenuGroup(
  props: ComponentProps<'div'>,
): React.ReactElement {
  return <PopperGroup {...props} />;
}

export function DropdownMenuLabel(
  props: ComponentProps<'div'>,
): React.ReactElement {
  return <PopperLabel {...props} />;
}

export function DropdownMenuSub(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return <PopperSub {...props} />;
}

export function DropdownMenuSubTrigger(
  props: PopperItemProps,
): React.ReactElement {
  return <PopperSubTrigger {...props} />;
}

export function DropdownMenuSubContent(
  props: PopperSubContentProps,
): React.ReactElement {
  return <PopperSubContent {...props} />;
}
