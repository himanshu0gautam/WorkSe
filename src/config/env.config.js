/**
 * Application environment configuration
 * Consolidates all import.meta.env variables with safe fallbacks
 */
export const ENV = {
  NODE_ENV: import.meta.env.MODE || 'development',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/v1',
  SOCKET_URL: import.meta.env.VITE_SOCKET_URL || 'https://api.example.com',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'KaamSathi',
};
