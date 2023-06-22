import axios from 'axios';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

const baseURL = 'http://185.185.70.73:8080/api/v1/';
export const axiosInstance = axios.create({
  baseURL,

});

axiosInstance.interceptors.request.use(
  (cnfg) => {
    const token = tokenRepository.getAccessToken();
    const config = cnfg;

    if (token && config.url !== 'auth/refresh') {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== 'auth/refresh') {
      originalRequest._retry = true;
      const result = await axiosInstance.post('auth/refresh', { value: tokenRepository.getRefreshToken() }, { headers: { Authorization: null } });
      tokenRepository.setAccessToken(result.data.authToken);
      tokenRepository.setRefreshToken(result.data.refresh);
      return axiosInstance(originalRequest);
    } if (originalRequest.url === 'auth/refresh') {
      tokenRepository.removeAccessToken();
      tokenRepository.removeRefreshToken();
    }
    return Promise.reject(error);
  },
);