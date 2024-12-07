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
      className={cn(
        "h-7 px-3 rounded-md border text-foreground flex items-center justify-between gap-1.5 transition",
        {
          "data-[disabled]:text-ui-disabled-foreground data-[disabled]:pointer-events-none":
            disabled,
        },
        className,
      )}
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
      className={cn(
        "bg-ui-background rounded-ui-content p-ui-content border w-64",
        className,
      )}
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
}: PopperItemProps) {
  return (
    <PopperItem
      disabled={disabled}
      prefix={prefix}
      suffix={suffix}
      asChild={asChild}
      className={cn(
        "text-foreground rounded-ui-item w-full transition-colors h-10",
        {
          "p-ui-item-inset": inset && !prefix,
          "p-ui-item": !inset || prefix,
        },
        "data-[highlighted]:bg-ui-item-background-hover data-[highlighted]:text-ui-item-foreground-hover data-[disabled]:text-ui-disabled-foreground data-[disabled]:pointer-events-none data-[disabled]:select-none",
        className,
      )}
      onClick={onClick}
      inset={inset}
      href={href}
    >
      {children}
    </PopperItem>
  );
}

function DropdownMenuSeparator({ className, style }: PopperSeparatorProps) {
  return (
    <PopperSeparator
      style={style}
      className={cn("h-px -mx-ui-content my-ui-content bg-border", className)}
    />
  );
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
