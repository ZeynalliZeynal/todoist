'use client';

import { createContextScope, Scope } from '@/utils/context';
import React from 'react';

const POPPER_SCOPE_NAME = 'Popper';

const [createPopperContext, createPopperScope] =
  createContextScope(POPPER_SCOPE_NAME);

type ScopedProps<Props> = Props & { __scopePopper?: Scope };

interface PopperContextProps {
  /** Whether the popper is currently open */
  open: boolean;

  /** Function to open the popper */
  handleOpen: () => void;

  /** Function to close the popper */
  handleClose: () => void;

  /** Whether the popper should be modal (block interaction with the rest of the app) */
  modal?: boolean;
}
const [PopperProvider, usePopper] =
  createPopperContext<PopperContextProps>(POPPER_SCOPE_NAME);

/** ---------------------------------------------------------------------------
 * Popper
 */
interface PopperProps {
  children: React.ReactNode;

  /**
   * Whether the popper should be modal (block interaction with the rest of the app)
   * @default true
   */
  modal?: boolean;

  /**
   * Controlled open state of the popper
   * @default undefined
   */
  open?: boolean;

  /**
   * Callback fired when the open state changes
   * @param open The new open state
   */
  onOpenChange?: (open: boolean) => void;
}

export const Popper = ({
  children,
  __scopePopper,
  open: controlledOpen,
  onOpenChange,
  modal = true,
}: ScopedProps<PopperProps>) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpen = () => {
    if (isControlled) {
      onOpenChange?.(true);
    } else {
      setUncontrolledOpen(true);
    }
  };

  const handleClose = () => {
    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setUncontrolledOpen(false);
    }
  };

  return (
    <PopperProvider
      scope={__scopePopper}
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      modal={modal}
    >
      {children}
    </PopperProvider>
  );
};

/** ---------------------------------------------------------------------------
 * PopperTrigger
 */

const TRIGGER_NAME = 'PopperTrigger';

interface PopperTriggerProps {
  children: React.ReactNode;
}

export const PopperTrigger = ({
  children,
  __scopePopper,
}: ScopedProps<PopperTriggerProps>) => {
  const { open, handleOpen, handleClose } = usePopper(
    TRIGGER_NAME,
    __scopePopper,
  );

  const handleClick = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

/** ---------------------------------------------------------------------------
 * PopperContent
 */

const CONTENT_NAME = 'PopperContent';

interface PopperContentProps {
  children: React.ReactNode;
}
export const PopperContent = ({
  children,
  __scopePopper,
}: ScopedProps<PopperContentProps>) => {
  const { open } = usePopper(CONTENT_NAME, __scopePopper);
  if (open) return <div>{children}</div>;
};

export { createPopperScope };
