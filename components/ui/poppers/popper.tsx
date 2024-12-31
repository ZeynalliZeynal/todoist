'use client';

import React, {
  cloneElement,
  createContext,
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ClientPosition,
  CommonParentProps,
  PopperCheckboxItemProps,
  PopperContentProps,
  PopperContextProps,
  PopperGroupProps,
  PopperItemProps,
  PopperLabelProps,
  PopperProps,
  PopperRadioGroupContextProps,
  PopperRadioGroupProps,
  PopperRadioItemProps,
  PopperSeparatorProps,
  PopperTriggerProps,
} from '@/types/ui/popper';
import { useRestrictBody } from '@/hooks/useRestrictBody';
import { useResize } from '@/hooks/useResize';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { useDebounce } from '@/hooks/useDebounce';
import { cn } from '@/utils/lib';
import { navigateItems } from '@/utils/ui/navigate-items';
import { alignBox } from '@/utils/ui/align-box';
import {
  ANIMATION_DURATION,
  ANIMATION_TIMEOUT,
  COMMAND_INPUT_SELECTOR,
  COMMAND_ROOT_SELECTOR,
  POPPER_CONTENT_SELECTOR,
  POPPER_ITEM_SELECTOR,
  POPPER_SELECTED_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
  POPPER_SUB_ITEM_SELECTOR,
} from '@/utils/ui/parameters';

export const PopperContext = createContext<PopperContextProps | null>(null);
const PopperRadioGroupContext =
  createContext<PopperRadioGroupContextProps | null>(null);

export const usePopper = () => {
  const context = useContext(PopperContext);
  if (!context) throw new Error('Popper component is outside of the provider');
  return context;
};

const usePopperRadioGroup = () => {
  const context = useContext(PopperRadioGroupContext);
  if (!context)
    throw new Error('Radio group component is outside of the provider');
  return context;
};

function Popper({
  children,
  menuType,
  open: controlledOpen = false,
  onOpenChange,
}: PopperProps & CommonParentProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | undefined>(
    undefined,
  );
  const [animate, setAnimate] = useState<boolean>(false);
  const [position, setPosition] = useState<ClientPosition>(undefined);
  const [activeTrigger, setActiveTrigger] = useState<HTMLElement | undefined>(
    undefined,
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number | undefined>(
    0,
  );
  const [highlightedItem, setHighlightedItem] = useState<
    HTMLElement | undefined
  >(undefined);

  const open = controlledOpen ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (state: boolean) => {
      if (!controlledOpen) setInternalOpen(state);
      onOpenChange?.(state);
    },
    [controlledOpen, onOpenChange],
  );

  const { debounce, clearDebounce } = useDebounce();

  const openPopper = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      clearDebounce();
      const rect = event.currentTarget.getBoundingClientRect();
      if (!rect) return;

      if (menuType === 'context') {
        const { clientX, clientY } = event;
        const left = Math.abs(clientX - rect.left);
        const top = Math.abs(clientY - rect.top);
        setPosition({ left, top });
      }
      setTriggerPosition(rect);
      setAnimate(false);
      setOpen(true);
      setActiveTrigger(event.currentTarget);
    },
    [clearDebounce, menuType, setOpen],
  );

  const closePopper = useCallback(() => {
    setAnimate(true);
    debounce(() => {
      setOpen(false);
      setAnimate(false);
      setHighlightedItem(undefined);
      setPosition(undefined);

      activeTrigger?.focus();

      setActiveTrigger(undefined);
    }, ANIMATION_TIMEOUT);
  }, [activeTrigger, debounce, setOpen]);

  const highlightItem = useCallback((value: HTMLElement | undefined) => {
    if (!value) return;
    setHighlightedItem(value);
    const root =
      value.closest(POPPER_CONTENT_SELECTOR) ||
      value.closest(POPPER_SUB_CONTENT_SELECTOR);
    if (!root) return;
    const menuItems = Array.from(
      root.querySelectorAll(POPPER_ITEM_SELECTOR) ||
        root.querySelectorAll(POPPER_SUB_ITEM_SELECTOR),
    );
    setCurrentItemIndex(menuItems.indexOf(value));
    value?.focus();
  }, []);

  const isHighlighted = (currentElement: HTMLElement) =>
    highlightedItem === currentElement;

  useRestrictBody(open);

  return (
    <PopperContext.Provider
      value={{
        open,
        openPopper,
        closePopper,
        position,
        triggerPosition,
        setTriggerPosition,
        animate,
        highlightItem,
        isHighlighted,
        currentItemIndex,
        setCurrentItemIndex,
        menuType,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
}

const PopperContextTrigger = forwardRef<HTMLElement, PopperTriggerProps>(
  ({ children, className = undefined, asChild, style }, forwardRef) => {
    const { open, openPopper, setTriggerPosition, menuType } = usePopper();

    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(forwardRef, () => ref.current as HTMLElement);

    const updatePosition = useCallback(() => {
      if (ref.current) {
        setTriggerPosition(ref.current.getBoundingClientRect());
      }
    }, [setTriggerPosition]);

    useResize(open, updatePosition);

    const handleContextMenu: React.MouseEventHandler<HTMLDivElement> =
      useCallback(
        (event) => {
          event.preventDefault();
          openPopper(event);
        },
        [openPopper],
      );

    const attributes = {
      tabIndex: 0,
      ref,
      'data-popper-trigger': '',
      'aria-expanded': open,
      'data-state': open ? 'open' : 'closed',
      className: cn(className),
      style: {
        ...style,
        pointerEvents: 'auto',
      },
      onContextMenu: menuType === 'context' ? handleContextMenu : undefined,
    };

    return asChild && React.isValidElement(children) ? (
      React.cloneElement(children, attributes)
    ) : (
      <div
        {...(attributes as React.HTMLAttributes<HTMLDivElement>)}
        className={cn(
          'select-none min-w-72 min-h-32 flex items-center justify-center text-gray-800 rounded-ui-content border border-dashed',
          className,
        )}
        style={{
          ...style,
          pointerEvents: 'auto',
        }}
      >
        {children}
      </div>
    );
  },
);
PopperContextTrigger.displayName = 'PopperContextTrigger';

const PopperTrigger = forwardRef<HTMLElement, PopperTriggerProps>(
  (
    { children, className = undefined, asChild, disabled, ...etc },
    forwardRef,
  ) => {
    const { open, openPopper, setTriggerPosition } = usePopper();
    const [isHovering, setIsHovering] = useState(false);

    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(forwardRef, () => ref.current as HTMLElement);

    const updatePosition = useCallback(() => {
      if (ref.current) {
        setTriggerPosition(ref.current.getBoundingClientRect());
      }
    }, [setTriggerPosition]);

    useResize(open, updatePosition);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (disabled) return;
      openPopper(event);
    };

    useResize(
      open,
      useCallback(() => {
        if (!ref.current) return;
        setTriggerPosition(ref.current.getBoundingClientRect());
      }, [setTriggerPosition]),
    );

    const commonAttributes = {
      ref,
      'data-popper-trigger': '',
      type: 'button',
      'aria-expanded': open,
      'aria-disabled': disabled,
      'data-disabled': disabled ? '' : undefined,
      'data-state': open ? 'open' : 'close',
      'data-hover': isHovering ? '' : null,
      onClick: handleClick,
      ...etc,
    };

    return asChild && isValidElement(children) ? (
      cloneElement(children, commonAttributes)
    ) : (
      <button
        {...(commonAttributes as HTMLAttributes<HTMLButtonElement>)}
        className={cn(className, {
          'data-[disabled]:cursor-not-allowed': disabled,
        })}
        disabled={disabled}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        {children}
      </button>
    );
  },
);
PopperTrigger.displayName = 'PopperTrigger';

const PopperContent = ({
  children,
  className,
  align = 'horizontal-center-bottom',
  fitToTrigger,
  style,
  ...etc
}: PopperContentProps) => {
  const {
    open,
    position,
    closePopper,
    triggerPosition,
    animate,
    highlightItem,
    currentItemIndex,
    setCurrentItemIndex,
    menuType,
  } = usePopper();
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({});

  const ref = useOutsideClick({ onTrigger: closePopper });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (document.querySelector(POPPER_SUB_CONTENT_SELECTOR)) return;
    if (event.code === 'Escape') {
      event.preventDefault();
      closePopper();
    }
    if (event.code === 'Tab') {
      event.preventDefault();
    }
    if (event.currentTarget.querySelector(COMMAND_ROOT_SELECTOR)) return;
    navigateItems({
      event,
      highlightItem,
      currentItemIndex,
      setCurrentItemIndex,
      root: event.currentTarget,
      itemSelector: `${POPPER_ITEM_SELECTOR}`,
    });
  };

  const handleResize = useCallback(() => {
    if (triggerPosition && ref.current) {
      if (menuType === 'context') {
        if (!position) return;
        const { left: clientLeft, top: clientTop } = position;
        const canFitRight =
          innerWidth - clientLeft - triggerPosition.left >
          ref.current.offsetWidth;

        const canFitBottom =
          innerHeight - clientTop - triggerPosition.top >
          ref.current.offsetHeight;

        let left, right, top, bottom;

        if (canFitRight) left = triggerPosition.left + clientLeft;
        else right = 8;
        if (canFitBottom) top = triggerPosition.top + clientTop;
        else bottom = 8;
        setMenuStyle({
          left: left,
          top,
          right,
          bottom,
        });
      } else {
        const alignedObject = alignBox({
          align,
          element: ref.current,
          triggerPosition,
        });
        setMenuStyle(alignedObject);
      }
    }
  }, [align, menuType, position, ref, triggerPosition]);

  useResize(open, handleResize);

  useEffect(() => {
    if (open && ref.current) {
      const popperItem =
        ref.current.querySelector(POPPER_SELECTED_ITEM_SELECTOR) ||
        ref.current.querySelector(POPPER_ITEM_SELECTOR);

      const items = [
        ...ref.current.querySelectorAll(POPPER_ITEM_SELECTOR),
      ] as HTMLElement[];

      const commandInput = ref.current.querySelector(
        COMMAND_INPUT_SELECTOR,
      ) as HTMLElement;

      // if command menu exists, focus on its input, otherwise highlight the item.
      if (commandInput) commandInput.focus();
      else if (popperItem) highlightItem(popperItem as HTMLElement);
      setCurrentItemIndex(items.indexOf(popperItem as HTMLElement));
    }
  }, [highlightItem, open, ref, setCurrentItemIndex]);

  if (open)
    return createPortal(
      <div
        ref={ref}
        data-portal=""
        role="menu"
        data-popper-content-menu=""
        data-state={!animate ? 'open' : 'closed'}
        className={cn(
          'rounded-xl p-ui-content bg-background-200 border',
          '!fixed !z-50 focus:ring-0',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          className,
        )}
        style={{
          ...menuStyle,
          ...style,
          pointerEvents: 'auto',
          width: fitToTrigger ? triggerPosition?.width : undefined,
          animationDuration: ANIMATION_DURATION + 'ms',
        }}
        onKeyDown={handleKeyDown}
        {...etc}
      >
        {children}
      </div>,
      document.body,
    );
};

const PopperCheckboxItem = ({
  children,
  className,
  asChild,
  disabled,
  onKeyDown,
  onCheck,
  checked,
}: PopperCheckboxItemProps) => {
  return (
    <PopperItem
      role="menuitemcheckbox"
      aria-checked={checked}
      onClick={onCheck}
      className={className}
      onKeyDown={onKeyDown}
      disabled={disabled}
      asChild={asChild}
    >
      {children}
    </PopperItem>
  );
};

const PopperItem = forwardRef<HTMLElement, PopperItemProps>(
  (
    {
      children,
      className,
      asChild,
      disabled,
      onKeyDown,
      onClick,
      role,
      ...etc
    },
    forwardRef,
  ) => {
    const { highlightItem, isHighlighted, closePopper } = usePopper();

    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(forwardRef, () => ref.current as HTMLElement);

    const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (disabled) return;
      if (onClick) {
        try {
          await onClick(event);
        } catch (err) {
          console.error(err);
          closePopper();
        } finally {
          closePopper();
        }
      } else closePopper();
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      highlightItem(event.currentTarget);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      // highlightItem(event.currentTarget);
    };

    const handleKeyDown = async (
      event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    ) => {
      onKeyDown?.(event as React.KeyboardEvent<HTMLElement>);
      const keyCode = (event as React.KeyboardEvent<HTMLElement>).code;
      if (keyCode === 'Enter' || keyCode === 'Space') {
        await handleClick(event as React.MouseEvent<HTMLElement>);
      }
    };

    const attributes = {
      ref,
      tabIndex: -1,
      role: role ? role : 'menuitem',
      'data-popper-content-item': '',
      'data-popper-content-sub-item':
        ref.current && ref.current.closest(POPPER_SUB_CONTENT_SELECTOR)
          ? ''
          : undefined,
      'aria-disabled': disabled,
      'data-disabled': disabled ? '' : undefined,
      'data-selected':
        ref.current && !disabled && isHighlighted(ref.current) ? '' : undefined,
      className: cn(
        'p-ui-item h-10 rounded-md',
        'flex items-center justify-start gap-2 w-full transition-colors',
        'data-[disabled]:cursor-not-allowed data-[disabled]:select-none',
        'data-[selected]:bg-gray-alpha-100',
        'focus-visible:!ring-0 focus-visible:!ring-offset-0 outline-0',
        className,
      ),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onKeyDown: handleKeyDown,
      onClick: handleClick,
      ...etc,
    };

    return asChild && React.isValidElement(children) ? (
      React.cloneElement(children, attributes)
    ) : (
      <div {...(attributes as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  },
);
PopperItem.displayName = 'PopperItem';

const PopperRadioGroup = ({
  children,
  className,
  value,
}: PopperRadioGroupProps) => {
  const [radioValue, setRadioValue] = useState<string>(value || '');

  const selectValue = (value: string) => {
    setRadioValue(value);
  };

  return (
    <PopperRadioGroupContext.Provider value={{ radioValue, selectValue }}>
      <PopperGroup role="radiogroup" className={className}>
        {children}
      </PopperGroup>
    </PopperRadioGroupContext.Provider>
  );
};

const PopperRadioItem = ({
  children,
  className,
  asChild,
  disabled,
  onChange,
  onKeyDown,
  value,
}: PopperRadioItemProps) => {
  const { selectValue } = usePopperRadioGroup();

  return (
    <PopperItem
      className={className}
      onKeyDown={onKeyDown}
      disabled={disabled}
      asChild={asChild}
      role="menuitemradio"
      onClick={() => {
        onChange(value);
        selectValue(value);
      }}
    >
      {children}
    </PopperItem>
  );
};

const PopperGroup = ({
  children,
  className,
  role,
  ...etc
}: PopperGroupProps) => {
  return (
    <div role={role ? role : 'group'} className={cn(className)} {...etc}>
      {children}
    </div>
  );
};

const PopperSeparator = forwardRef<HTMLDivElement, PopperSeparatorProps>(
  ({ className, style, ...etc }, forwardRef) => {
    return (
      <div
        ref={forwardRef}
        role="separator"
        className={cn('h-px -mx-ui-content my-ui-content bg-border', className)}
        style={style}
        {...etc}
      />
    );
  },
);
PopperSeparator.displayName = 'PopperSeparator';

const PopperLabel = forwardRef<HTMLLabelElement, PopperLabelProps>(
  (
    { children, className, inset = false, style, asChild, ...etc },
    forwardRef,
  ) => {
    const attributes = {
      tabIndex: -1,
      ref: forwardRef,
      className,
      style,
    };

    return asChild && isValidElement(children) ? (
      cloneElement(children, attributes)
    ) : (
      <label
        ref={forwardRef}
        tabIndex={-1}
        className={cn(
          'text-foreground font-semibold flex items-center w-full',
          {
            'p-ui-item-inset': inset,
            'p-ui-item': !inset,
          },
          className,
        )}
        style={style}
        {...etc}
      >
        {children}
      </label>
    );
  },
);
PopperLabel.displayName = 'PopperLabel';

export {
  Popper,
  PopperSeparator,
  PopperRadioGroup,
  PopperLabel,
  PopperGroup,
  PopperRadioItem,
  PopperCheckboxItem,
  PopperTrigger,
  PopperItem,
  PopperContent,
  PopperContextTrigger,
};
