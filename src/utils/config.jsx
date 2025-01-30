import axios from "axios";
export const API = axios.create({
  baseURL: "https://greenshop-c00c.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);