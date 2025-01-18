import { PopperProps } from './popper.types';
import { PopperProvider } from './popper-context';

export function Popper(props: PopperProps) {
  const { children } = props;
  return <PopperProvider>{children}</PopperProvider>;
}
