import React from "react";
import { LuChevronRight } from "react-icons/lu";
import { PopperContentProps, PopperItemProps } from "@/types/ui/popper";
import PopperSub from "@/components/ui/poppers/popper-sub";

const DropdownMenuSub = ({ children }: { children: React.ReactNode }) => {
  return <PopperSub>{children}</PopperSub>;
};

const DropdownMenuSubTrigger = ({
  children,
  className,
  inset,
  disabled,
  prefix,
  suffix = <LuChevronRight />,
}: PopperItemProps) => {
  return (
    <PopperSub.Trigger
      className={className}
      suffix={suffix}
      prefix={prefix}
      inset={inset}
      disabled={disabled}
    >
      {children}
    </PopperSub.Trigger>
  );
};

const DropdownMenuSubContent = ({
  children,
  className,
}: PopperContentProps) => {
  return (
    <PopperSub.Content className={className}>{children}</PopperSub.Content>
  );
};

DropdownMenuSub.Trigger = DropdownMenuSubTrigger;
DropdownMenuSub.Content = DropdownMenuSubContent;

export default DropdownMenuSub;
