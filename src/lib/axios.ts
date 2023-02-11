import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default axiosInstance;