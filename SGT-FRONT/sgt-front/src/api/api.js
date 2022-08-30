import axios from "axios";
// import 'dotenv/config';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export const api = axios.create({
  baseURL: 'http://localhost:3200/api/',
  timeout: 3000,
});


//interceptors 
api.interceptors.request.use( (request) => {

  const token = cookies.get('token');
  
  if(token) request.headers.common['Authorization'] = `Bearer ${token}`;

  return request
});