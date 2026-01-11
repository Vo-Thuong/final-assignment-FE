import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gắn accessToken tự động nếu có
axiosClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosClient;
