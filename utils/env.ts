export function getEnv(key: string, defaultValue?: string | number): string {
  const value = process.env[key] || defaultValue?.toString();
  if (value === undefined)
    throw new Error(`Environment variable ${key} not found`);

  return value;
}

export const api_url = getEnv('NEXT_PUBLIC_API_URL');
export const node_env = getEnv('NODE_ENV');
