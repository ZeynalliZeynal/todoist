export type SideProps = 'top' | 'right' | 'bottom' | 'left';
export type AlignProps = 'start' | 'center' | 'end';

export interface PopperProviderProps {
  isOpen: boolean;
  triggerPosition: DOMRect | null;
  id: string;
  activeTrigger: HTMLElement | null;
  highlightedIndex?: number;

  setTriggerPosition(style: DOMRect | null): void;
  setHighlightedIndex(value?: number): void;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperContextProps extends PopperProviderProps {
  highlightedItem: HTMLElement | null;
  highlight(element: HTMLElement | null): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps
  extends Omit<React.ComponentProps<'button'>, 'prefix'> {
  asChild?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface PopperContentProps extends React.ComponentProps<'div'> {
  align?: AlignProps;
  side?: SideProps;
  asChild?: boolean;
}

export interface PopperSubContentProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

export interface PopperItemProps
  extends Omit<React.ComponentProps<'div'>, 'prefix'> {
  disabled?: boolean;
  asChild?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  inset?: boolean;
}
export interface PopperProviderProps {
  isOpen: boolean;
  isMounted: boolean;
  triggerPosition: DOMRect | null;
  id: string;
  activeTrigger: HTMLElement | null;
  highlightedIndex?: number;

  setTriggerPosition(style: DOMRect | null): void;
  setHighlightedIndex(value?: number): void;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperContextProps extends PopperProviderProps {
  highlightedItem: HTMLElement | null;
  highlight(element: HTMLElement | null): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps
  extends Omit<React.ComponentProps<'button'>, 'prefix'> {
  asChild?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface PopperContentProps extends React.ComponentProps<'div'> {
  align?: AlignProps;
  side?: SideProps;
  asChild?: boolean;
}

export interface PopperSubContentProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

export interface PopperItemProps
  extends Omit<React.ComponentProps<'div'>, 'prefix'> {
  disabled?: boolean;
  asChild?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  inset?: boolean;
}
