import axios from "axios";
import { client_url } from "@/utils/env";

const apiClient = axios.create({
  baseURL: client_url,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response);
  },
);

export default apiClient;
