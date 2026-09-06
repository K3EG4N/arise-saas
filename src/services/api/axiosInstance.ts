import axios from "axios";
import { navigateTo } from "./navigation";

export const httpClient = axios.create({
  baseURL: "http://localhost:5153/api",
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/login");
    }
    return Promise.reject(error);
  },
);
