import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const createApiConfig = () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://127.0.0.1:3001',
    headers: {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'Express',
    },
  };
  return axiosConfig;
};

axios.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line
  (error) => console.log(error),
);

const httpService = axios.create(createApiConfig());

export default httpService;
