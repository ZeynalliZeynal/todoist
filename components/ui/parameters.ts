export const ANIMATION_DURATION: number = 250;
export const ANIMATION_TIMEOUT = Math.max(ANIMATION_DURATION - 100, 0);
export const PORTAL_SELECTOR = "[data-portal]";

export const DEFAULT_SPACE = 12;

// Selectors
export const POPPER_TRIGGER_SELECTOR = "[data-popper-trigger]";
export const POPPER_CONTENT_SELECTOR = "[data-popper-content-menu]";
export const POPPER_ITEM_SELECTOR =
  "[data-popper-content-item]:not([data-disabled])";
export const POPPER_SELECTED_ITEM_SELECTOR =
  "[data-popper-content-item][data-selected]:not([data-disabled])";

export const POPPER_SUB_TRIGGER_SELECTOR = "[data-popper-sub-trigger]";
export const POPPER_SUB_CONTENT_SELECTOR = "[data-popper-content-sub-menu]";
export const POPPER_SUB_ITEM_SELECTOR =
  "[data-popper-content-sub-item]:not([data-disabled])";

export const COMMAND_INPUT_SELECTOR = "[data-command-input]";
export const COMMAND_ROOT_SELECTOR = "[data-command-root]";

export const TOOLTIP_CONTENT_SELECTOR = "[data-tooltip-content]";
