'use client';

import React from 'react';

export function useCopy({
  text,
  duration = 1500,
}: {
  text: string;
  duration?: number;
}) {
  const [copying, setCopying] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopying(true);
      setTimeout(() => setCopying(false), duration);
    } catch (err) {
      console.log('Could not copy text', err);
    }
  };

  return [copying, copy] as const;
}
