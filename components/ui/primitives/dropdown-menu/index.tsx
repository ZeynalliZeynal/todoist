import { ComponentProps } from 'react';

import {
  Popper,
  PopperContent,
  PopperContentProps,
  PopperGroup,
  PopperItem,
  PopperItemProps,
  PopperLabel,
  PopperSeparator,
  PopperTrigger,
  PopperTriggerProps,
} from '@everest-ui/react-popper';

export function DropdownMenu(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return <Popper {...props} />;
}

export function DropdownMenuTrigger(
  props: PopperTriggerProps
): React.ReactElement {
  return <PopperTrigger {...props} />;
}

export function DropdownMenuItem(props: PopperItemProps): React.ReactElement {
  return <PopperItem {...props} />;
}

export function DropdownMenuContent(
  props: PopperContentProps
): React.ReactElement {
  return <PopperContent {...props} />;
}

export function DropdownMenuSeparator(
  props: ComponentProps<'div'>
): React.ReactElement {
  return <PopperSeparator {...props} />;
}

export function DropdownMenuGroup(
  props: ComponentProps<'div'>
): React.ReactElement {
  return <PopperGroup {...props} />;
}

export function DropdownMenuLabel(
  props: ComponentProps<'div'>
): React.ReactElement {
  return <PopperLabel {...props} />;
}
