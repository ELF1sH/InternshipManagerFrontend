import axios from 'axios';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

export const axiosInstance = axios.create({
  // baseURL: 'http://185.185.70.73:8080/api/v1/',
  headers: {
    Authorization: tokenRepository.getAccessToken() ? `Bearer ${tokenRepository.getAccessToken()}` : '',
  },
});
