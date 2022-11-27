import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { API_URL } from '@/types/contestant';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Cache-Control': 'no-cache',
  },
};

axios.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line
  (error) => console.log(error),
);

const httpService = axios.create(axiosConfig);

export default httpService;
