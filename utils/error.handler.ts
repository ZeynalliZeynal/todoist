export function errorHandler<T extends (...args: any[]) => Promise<any>>(
  fn: T
) {
  return async (
    ...args: Parameters<T>
  ): Promise<ReturnType<T> | { error: ServerResponse }> => {
    try {
      return await fn(...args);
    } catch (error) {
      return error as ReturnType<T>;
    }
  };
}
