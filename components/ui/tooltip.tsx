'use client';

import React, {
  cloneElement,
  createContext,
  CSSProperties,
  Dispatch,
  isValidElement,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
} from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { PopperContentProps, PopperTriggerProps } from '@/types/ui/popper';
import { useResize } from '@/hooks/useResize';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/lib';
import { alignBox } from '@/utils/ui/align-box';
import { Variants } from '@/types/ui/variants';
import {
  ANIMATION_DURATION,
  ANIMATION_TIMEOUT,
  DEFAULT_SPACE,
} from '@/utils/ui/parameters';

type TooltipContextProps = {
  openTooltip: (event: React.MouseEvent<HTMLElement>) => void;
  closeTooltip: () => void;
  cancelCloseTooltip: () => void;
  open: boolean;
  triggerPosition: DOMRect | null;
  animate: boolean;
  isClosing: boolean;
  setTriggerPosition: Dispatch<SetStateAction<DOMRect | null>>;
  uid: string;
};

const TooltipContext = createContext<TooltipContextProps | null>(null);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) throw new Error('Tooltip component was Used outside');
  return context;
};

const Tooltip = ({
  children,
  openDelay = 0,
  closeDelay = 0,
}: {
  children: ReactNode;
  openDelay?: number;
  closeDelay?: number;
}) => {
  const [animate, setAnimate] = useState(false);
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | null>(null);
  const uid = useId();

  const { debounce, clearDebounce } = useDebounce();

  const openTooltip = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      clearDebounce();
      const rect = event.currentTarget.getBoundingClientRect();
      if (!rect) return;
      setTriggerPosition(rect);
      if (isClosing) {
        setIsClosing(false);
        setOpen(true);
      } else {
        debounce(() => {
          setAnimate(false);
          setOpen(true);
        }, openDelay);
      }
    },
    [clearDebounce, debounce, isClosing, openDelay]
  );

  const closeTooltip = useCallback(() => {
    clearDebounce();
    setIsClosing(true);
    debounce(() => {
      setAnimate(true);
      setTimeout(() => {
        setOpen(false);
        setAnimate(false);
        setIsClosing(false);
      }, ANIMATION_TIMEOUT);
    }, closeDelay);
  }, [clearDebounce, closeDelay, debounce]);

  const cancelCloseTooltip = useCallback(() => {
    clearDebounce();
    setIsClosing(false);
  }, [clearDebounce]);

  return (
    <TooltipContext.Provider
      value={{
        openTooltip,
        closeTooltip,
        cancelCloseTooltip,
        animate,
        open,
        triggerPosition,
        setTriggerPosition,
        isClosing,
        uid,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = ({
  children,
  disabled,
}: Omit<
  PopperTriggerProps,
  'className' | 'asChild' | 'style' | 'prefix' | 'suffix'
>) => {
  const { open, openTooltip, closeTooltip, setTriggerPosition, uid } =
    useTooltip();
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseEnter: MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    if (disabled) return;
    openTooltip(event);
  };

  const handleMouseLeave: MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    closeTooltip();
  };

  useResize(
    open,
    useCallback(() => {
      if (ref.current) {
        setTriggerPosition(ref.current.getBoundingClientRect());
      }
    }, [setTriggerPosition])
  );

  const attributes = {
    ref,
    'aria-controls': `tooltip${uid}`,
    'data-state': open ? 'open' : 'closed',
    'data-disabled': disabled ? '' : undefined,
    'aria-disabled': disabled,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return isValidElement(children) ? cloneElement(children, attributes) : null;
};

const TooltipContent = ({
  children,
  className,
  align = 'horizontal-center-bottom',
  variant,
}: Omit<PopperContentProps, 'style' | 'fitToTrigger'> & {
  variant: Variants;
}) => {
  const {
    animate,
    open,
    triggerPosition,
    isClosing,
    cancelCloseTooltip,
    closeTooltip,
    uid,
  } = useTooltip();
  const [style, setStyle] = useState<CSSProperties>({});

  const inset =
    align?.includes('horizontal') && align?.includes('top')
      ? `0 0 -${DEFAULT_SPACE + 1}px 0`
      : align?.includes('horizontal') && align?.includes('bottom')
      ? `-${DEFAULT_SPACE + 1}px 0 0 0`
      : align?.includes('vertical') && align?.includes('left')
      ? `0 -${DEFAULT_SPACE + 1}px 0 0`
      : align?.includes('vertical') && align?.includes('right')
      ? `0 0 0 -${DEFAULT_SPACE + 1}px`
      : undefined;

  const ref = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback(() => {
    if (!triggerPosition || !ref.current) return;
    const alignObject = alignBox({
      align,
      element: ref.current,
      triggerPosition,
    });
    setStyle(alignObject);
  }, [align, triggerPosition]);

  useResize(open, updatePosition);

  const handleMouseEnter = useCallback(() => {
    cancelCloseTooltip();
  }, [cancelCloseTooltip]);

  const handleMouseLeave = useCallback(() => {
    closeTooltip();
  }, [closeTooltip]);

  if (open || isClosing)
    return createPortal(
      <div
        ref={ref}
        data-tooltip-content=""
        data-portal=""
        aria-labelledby={`tooltip${uid}`}
        data-state={!animate ? 'open' : 'closed'}
        aria-expanded={open}
        className={cn(
          'fixed z-50 px-3 rounded-lg py-1.5 text-xs w-fit',
          {
            'bg-gray-700 text-gray-50': variant === 'gray',
            'bg-gray-200 text-foreground': variant === 'gray-subtle',
            'bg-blue-700 text-blue-50': variant === 'blue',
            'bg-blue-200 text-blue-900': variant === 'blue-subtle',
            'bg-purple-700 text-purple-50': variant === 'purple',
            'bg-purple-200 text-purple-900': variant === 'purple-subtle',
            'bg-amber-700 text-background-200': variant === 'amber',
            'bg-amber-200 text-amber-900': variant === 'amber-subtle',
            'bg-red-700 text-red-50': variant === 'red',
            'bg-red-200 text-red-900': variant === 'red-subtle',
            'bg-pink-700 text-pink-50': variant === 'pink',
            'bg-pink-200 text-pink-900': variant === 'pink-subtle',
            'bg-green-700 text-green-50': variant === 'green',
            'bg-green-200 text-green-900': variant === 'green-subtle',
            'bg-teal-700 text-teal-50': variant === 'teal',
            'bg-teal-200 text-teal-900': variant === 'teal-subtle',
          },
          'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        style={{
          ...style,
          animationDuration: ANIMATION_DURATION + 'ms',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={cn('absolute z-[1]')} style={{ inset }} />
        <span className="relative z-[2]">{children}</span>
      </div>,
      document.body
    );

  return null;
};

export { Tooltip, TooltipContent, TooltipTrigger };
