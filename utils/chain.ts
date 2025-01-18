export function chain<T>(
  ...funcs: Array<((arg: T) => void) | null | undefined>
): (arg: T) => void {
  return (arg: T) => {
    funcs.forEach((func) => {
      if (typeof func === 'function') {
        func(arg);
      }
    });
  };
}
