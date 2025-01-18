import { PopperProps } from './popper.types';
import { PopperProvider } from './popper-context';
import dynamic from 'next/dynamic';

export const PopperContent = dynamic(
  () => import('./popper-content').then((mod) => mod.PopperContent),
  { ssr: false },
);

export function Popper(props: PopperProps) {
  const { children } = props;
  return <PopperProvider>{children}</PopperProvider>;
}

export * from './popper-item';
export * from './popper-trigger';
