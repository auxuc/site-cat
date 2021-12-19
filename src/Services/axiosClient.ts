import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosClient = () => {

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
  // switch (error.response.status) {
  //   case 401:
  //     this.redirectTo(document, '/')
  //     break;
  //   case 404:
  //     this.redirectTo(document, '/404')
  //     break;
  //   default:
  //     this.redirectTo(document, '/500')
  //     break;
  // }
  return Promise.reject(error)
}