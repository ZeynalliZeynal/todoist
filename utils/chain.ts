export function chain<T extends (...args: any[]) => void | Promise<void>>(
  ...funcs: Array<T | null | undefined>
): (...args: Parameters<T>) => void {
  return async (...args: Parameters<T>) => {
    for (const func of funcs) {
      if (typeof func === 'function') {
        await func(...args);
      }
    }
  };
}
