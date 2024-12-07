import {
  CommonParentProps,
  PopperCheckboxItemProps,
  PopperContentProps,
  PopperGroupProps,
  PopperItemProps,
  PopperLabelProps,
  PopperRadioGroupProps,
  PopperRadioItemProps,
  PopperSeparatorProps,
  PopperTriggerProps,
} from "@/types/ui/popper";
import {
  Popper,
  PopperCheckboxItem,
  PopperContent,
  PopperGroup,
  PopperItem,
  PopperLabel,
  PopperRadioGroup,
  PopperRadioItem,
  PopperSeparator,
  PopperTrigger,
} from "@/components/ui/poppers/popper";
import { cn } from "@/utils/lib";
import React from "react";

function DropdownMenu(props: CommonParentProps) {
  return (
    <Popper menuType="dropdown" {...props}>
      {props.children}
    </Popper>
  );
}

function DropdownMenuTrigger({
  children,
  prefix,
  suffix,
  className,
  disabled,
  asChild,
}: PopperTriggerProps) {
  return (
    <PopperTrigger
      suffix={suffix}
      prefix={prefix}
      className={cn(className)}
      asChild={asChild}
      disabled={disabled}
    >
      {children}
    </PopperTrigger>
  );
}

function DropdownMenuContent({
  children,
  className,
  align,
  fitToTrigger,
}: PopperContentProps) {
  return (
    <PopperContent
      fitToTrigger={fitToTrigger}
      align={align}
      className={cn(className)}
    >
      {children}
    </PopperContent>
  );
}

function DropdownMenuItem({
  children,
  disabled = false,
  className,
  asChild = false,
  suffix,
  prefix,
  onClick,
  inset,
  href,
  shortcut,
}: PopperItemProps) {
  return (
    <PopperItem
      disabled={disabled}
      prefix={prefix}
      suffix={suffix}
      asChild={asChild}
      className={className}
      onClick={onClick}
      inset={inset}
      href={href}
      shortcut={shortcut}
    >
      {children}
    </PopperItem>
  );
}

function DropdownMenuSeparator({ className, style }: PopperSeparatorProps) {
  return <PopperSeparator style={style} className={cn(className)} />;
}

function DropdownMenuGroup(props: PopperGroupProps) {
  return <PopperGroup {...props} />;
}

function DropdownMenuRadioGroup(props: PopperRadioGroupProps) {
  return <PopperRadioGroup {...props} />;
}

function DropdownMenuRadioItem(props: PopperRadioItemProps) {
  return <PopperRadioItem {...props} />;
}

function DropdownMenuCheckboxItem(props: PopperCheckboxItemProps) {
  return <PopperCheckboxItem {...props} />;
}

function DropdownMenuLabel(props: PopperLabelProps) {
  return <PopperLabel {...props} />;
}

DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.RadioGroup = DropdownMenuRadioGroup;
DropdownMenu.RadioItem = DropdownMenuRadioItem;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Content = DropdownMenuContent;

export {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
};
