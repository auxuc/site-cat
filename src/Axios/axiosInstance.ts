import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = () => {

  const defaultOptions: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let instance = axios.create(defaultOptions);
  instance.interceptors.response.use(handleSuccess, handleError);

  return instance;
};

const handleSuccess = (response: AxiosResponse<any>) => response;

const handleError = (error: any) => {
  return Promise.reject(error)
}
export default axiosInstance()