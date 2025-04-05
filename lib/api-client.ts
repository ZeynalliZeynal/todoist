import axios from 'axios';
import { api_url } from '@/utils/env';
import { getAuthCookies } from '@/utils/cookies';
import { headers } from 'next/headers';

const apiClient = axios.create({
  baseURL: api_url + '/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'ngrok',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken } = await getAuthCookies();

    config.headers['User-Agent'] = (await headers()).get('user-agent');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error.response?.data);
  },
);

export default apiClient;
