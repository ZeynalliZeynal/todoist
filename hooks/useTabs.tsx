'use client';

import { useEffect, useRef, useState } from 'react';

export function useTabs({ defaultValue }: { defaultValue?: string } = {}) {
  const [activeValue, setActiveTab] = useState<string>(defaultValue || '');
  const [hoveredValue, setHoveredTab] = useState<string>('');
  const [pillStyles, setPillStyles] = useState({
    width: 0,
    left: 0,
    height: 0,
  });
  const container = useRef<HTMLDivElement>(null);
  const activeTab = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updatePillStyles = () => {
      if (activeTab.current && container.current) {
        const navRect = container.current.getBoundingClientRect();
        const itemRect = activeTab.current.getBoundingClientRect();
        setPillStyles({
          width: itemRect.width,
          left: itemRect.left - navRect.left,
          height: itemRect.height,
        });
      }
    };

    updatePillStyles();
  }, [activeValue, hoveredValue]);

  function handleClick(value: string) {
    setActiveTab(value);
  }

  function handleMouseEnter(value: string) {
    setHoveredTab(value);
  }

  function handleMouseLeave() {
    setHoveredTab('');
  }

  return {
    container,
    activeTab,
    activeValue,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    pillStyles,
    hoveredValue,
  };
}
