import { useCallback, useEffect } from 'react';
import { PORTAL_SELECTOR } from '@/utils/ui/parameters';

export const useRestrictBody = (condition: boolean) => {
  const getScrollbarWidth = useCallback(() => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode?.removeChild(outer);

    return scrollbarWidth;
  }, []);

  const applyBodyStyles = useCallback(
    (portalExists: boolean, scrollbarWidth: number) => {
      if (portalExists) {
        document.body.style.marginRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';
      } else {
        document.body.style.marginRight = '0px';
        document.body.style.overflow = '';
        document.body.style.pointerEvents = 'auto';
      }
    },
    [],
  );

  const handleNestedDialogs = useCallback(() => {
    const dialog = document.body.querySelector('[role=dialog]') as HTMLElement;
    const menu = document.body.querySelector('[role=menu]') as HTMLElement;
    const nestedDialog = !!(dialog && menu);

    if (nestedDialog && menu) {
      dialog.style.pointerEvents = 'none';
    } else if (dialog) {
      dialog.style.pointerEvents = 'auto';
    }
  }, []);

  useEffect(() => {
    const portalExists = document.body.querySelector(PORTAL_SELECTOR);
    const scrollbarWidth = getScrollbarWidth();

    applyBodyStyles(!!portalExists, scrollbarWidth);
    handleNestedDialogs();

    // Cleanup function
    return () => {
      document.body.style.marginRight = '0px';
      document.body.style.overflow = '';
      document.body.style.pointerEvents = 'auto';
    };
  }, [condition, getScrollbarWidth, applyBodyStyles, handleNestedDialogs]);
};
