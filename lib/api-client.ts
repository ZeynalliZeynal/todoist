import axios from "axios";
import { api_url } from "@/utils/env";

const apiClient = axios.create({
  baseURL: api_url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response);
  },
);

export default apiClient;
