import axios from "axios";
import { getToken } from '../services/storage.services'

axios.interceptors.request.use(
    (config) => {
     const token = getToken();
     config.headers.Authorization = `Bearer ${token}`;
     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );

 export default axios;