'use client';
import dynamic from 'next/dynamic';

const AnimatedPopperContent = dynamic(
  () => import('./animated-popper-content'),
  {
    ssr: false,
  },
);

export {
  AnimatedPopperOverlay,
  AnimatedPopperTrigger,
  AnimatedPopperProvider,
  AnimatedPopper,
} from './animated-popper';
export { AnimatedPopperContent };
