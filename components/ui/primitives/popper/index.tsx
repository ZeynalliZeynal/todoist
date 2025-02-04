'use client';

import { PopperProps } from './popper.types';
import { Popper as PopperProvider } from './popper-context';
import dynamic from 'next/dynamic';

export const PopperContent = dynamic(
  () => import('./popper-content').then((mod) => mod.PopperContent),
  { ssr: false }
);

export const PopperSubContent = dynamic(
  () => import('./popper-sub-content').then((mod) => mod.PopperSubContent),
  { ssr: false }
);

export function Popper(props: PopperProps) {
  const { children } = props;
  return <PopperProvider>{children}</PopperProvider>;
}

export * from './popper-sub-context';
export * from './popper-item';
export * from './popper-trigger';
export * from './popper-sub-trigger';
export * from './popper-separator';
export * from './popper-group';
export * from './popper-label';
