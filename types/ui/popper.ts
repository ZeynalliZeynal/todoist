import React, {
  ComponentProps,
  CSSProperties,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";

type CommonParentProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<"div">;

type CommonProps = {
  children: ReactNode | ReactElement;
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
} & ComponentProps<"div">;

type ClientPosition =
  | {
      left: number;
      top: number;
    }
  | undefined;

export type MenuTypes = "select" | "dropdown" | "context";

type PopperContextProps = {
  openPopper: (event: React.MouseEvent<HTMLElement>) => void;
  closePopper: () => void;
  open: boolean;
  triggerPosition?: DOMRect;
  animate: boolean;
  position?: ClientPosition;
  setTriggerPosition: Dispatch<SetStateAction<DOMRect | undefined>>;
  highlightItem: (value: HTMLElement | undefined) => void;
  isHighlighted: (currentElement: HTMLElement) => boolean;
  currentItemIndex: number | undefined;
  setCurrentItemIndex: Dispatch<SetStateAction<number | undefined>>;
  menuType?: MenuTypes;
};

type PopperRadioGroupContextProps = {
  radioValue: string;
  selectValue(value: string): void;
};

type PopperRadioItemProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
} & CommonProps;

type PopperRadioGroupProps = {
  value: string;
} & CommonGroupProps;

type Alignments =
  | "horizontal-center-top"
  | "horizontal-center-bottom"
  | "horizontal-left-top"
  | "horizontal-left-bottom"
  | "horizontal-right-top"
  | "horizontal-right-bottom"
  | "vertical-left-bottom"
  | "vertical-left-center"
  | "vertical-left-top"
  | "vertical-right-bottom"
  | "vertical-right-top"
  | "vertical-right-center";

type PopperContentProps = {
  children: React.ReactNode;
  className?: string;
  align?: Alignments;
  fitToTrigger?: boolean;
  style?: CSSProperties;
};

type PopperLabelProps = {
  children: ReactNode;
  className?: string;
  inset?: boolean;
  asChild?: boolean;
  style?: CSSProperties;
} & ComponentProps<"label">;

type PopperSeparatorProps = {
  className?: string;
  style?: CSSProperties;
};

type PopperTriggerProps = CommonProps & {
  disabled?: boolean;
};

type PopperProps = {
  children: ReactNode;
  menuType?: MenuTypes;
};

type SelectItemProps = {
  value: string;
} & CommonProps;

type PopperItemProps = {
  onClick?: (
    event: React.MouseEvent<HTMLElement>,
  ) => string | number | void | Promise<string | number | void>;
  role?: React.AriaRole;
  onSelect?: (value: string) => void;
  removable?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
} & CommonProps;

type PopperCheckboxItemProps = {
  onCheck: () => void;
  checked?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
} & CommonProps;

type CommonGroupProps = {
  children: ReactNode;
  className?: string;
} & ComponentProps<"div">;

type PopperGroupProps = {
  role?: React.AriaRole;
} & CommonGroupProps;

export type {
  ClientPosition,
  PopperContentProps,
  PopperContextProps,
  PopperCheckboxItemProps,
  PopperItemProps,
  PopperTriggerProps,
  PopperRadioGroupProps,
  PopperGroupProps,
  PopperRadioGroupContextProps,
  PopperRadioItemProps,
  Alignments,
  PopperProps,
  PopperLabelProps,
  PopperSeparatorProps,
  CommonParentProps,
  SelectItemProps,
  CommonProps,
};
