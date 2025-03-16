import axios from 'axios';
import { api_url } from '@/utils/env';
import { getAuthCookies } from '@/utils/cookies';

const apiClient = axios.create({
  baseURL: api_url,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken } = await getAuthCookies();

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
