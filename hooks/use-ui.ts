import { useLayoutEffect, useRef } from 'react';

interface OutsideClick {
  selectors?: string[];
  capturePhase?: boolean;
  action(): void;
}

interface Restrict {
  condition?: boolean;
}

export function useRestrict(options: Restrict) {
  const { condition } = options;

  useLayoutEffect(() => {
    if (condition) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.pointerEvents = 'none';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Compensate for scrollbar width
    } else {
      document.body.style.pointerEvents = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      // Clean up on unmount or when condition changes
      document.body.style.pointerEvents = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [condition]);
}

export function useOutsideClick(options: OutsideClick) {
  const { selectors, capturePhase, action } = options;
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !selectors?.some((selector) =>
          (event.target as Element).closest(selector),
        )
      ) {
        action();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, capturePhase);
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
        capturePhase,
      );
    };
  }, [action, capturePhase, ref, selectors]);

  return ref;
}
