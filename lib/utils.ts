import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounceWithAnimation(
  element: HTMLElement,
  callback: () => void,
) {
  const { transitionDuration, animationDuration } =
    window.getComputedStyle(element);

  const hasAnimation =
    animationDuration !== '0s' || transitionDuration !== '0s';

  let timer;

  const duration =
    Math.max(parseFloat(animationDuration), parseFloat(transitionDuration)) *
      1000 -
    10; // add a delay to prevent the flickering

  if (hasAnimation) {
    timer = setTimeout(() => {
      callback();
    }, duration);
  } else callback();
  return timer;
}
