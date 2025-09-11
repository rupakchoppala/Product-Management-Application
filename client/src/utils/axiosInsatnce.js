import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://product-management-application-3.onrender.com',
    withCredentials: false,
    // timeout: 10000,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
  export default axiosInstance;