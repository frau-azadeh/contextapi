import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 5000, // زمان‌بندی درخواست‌ها
  headers: {
    "Content-Type": "application/json", // نوع محتوای درخواست‌ها
  },
});

// Interceptor برای مدیریت درخواست‌ها
axiosInstance.interceptors.request.use(
  (config) => {
    // تنظیمات اضافی برای هر درخواست (در صورت نیاز)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor برای مدیریت پاسخ‌ها
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
