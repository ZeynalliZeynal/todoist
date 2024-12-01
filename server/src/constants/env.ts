const getEnv = (key: string, defaultValue?: string | number): string => {
  const value = process.env[key];
  if (value === undefined)
    throw new Error(`Environment variable ${key} not found`);

  return value;
};

export const client_dev_origin = getEnv("CLIENT_DEV_URL");
export const node_env = getEnv("NODE_ENV", "development");
export const admin_email = getEnv("ADMIN_EMAIL");
export const port = getEnv("PORT", 8080);

export const email_host = getEnv("EMAIL_HOST");
export const email_username = getEnv("EMAIL_USERNAME");
export const email_password = getEnv("EMAIL_PASSWORD");

export const database_uri = getEnv("DATABASE_URI");
export const database_password = getEnv("DATABASE_PASSWORD");

export const jwt_secret = getEnv("JWT_SECRET");
export const jwt_refresh_secret = getEnv("JWT_REFRESH_SECRET");
export const jwt_refresh_expires_in = getEnv("JWT_REFRESH_EXPIRES_IN");
export const jwt_expires_in = getEnv("JWT_EXPIRES_IN");
export const jwt_cookie_expires_in = getEnv("JWT_COOKIE_EXPIRES_IN");
