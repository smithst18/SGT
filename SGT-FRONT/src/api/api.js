import axios from "axios";
// import 'dotenv/config';
import { useCookies } from "vue3-cookies";
import { useMainStore } from "../stores/mainStore"

const { cookies } = useCookies();

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  timeout: 3000,
});


//interceptors 
api.interceptors.request.use( (request) => {
  const mainStore = useMainStore();
  const token = cookies.get('token');

  if(token) request.headers.common['Authorization'] = `Bearer ${token}`;
  else console.log('el token no existe');
  mainStore.requestToTrue();
  return request
}, function (error) {
  // ocultar el loader
  const mainStore = useMainStore();
  mainStore.requestToFalse();
  return Promise.reject(error);
});

api.interceptors.response.use( (response) => {
  const mainStore = useMainStore();

  mainStore.requestToFalse();

  return response
}, function (error) {
  const mainStore = useMainStore();
  //si el toke esta vencido =>
  if(error.request.status == 419){
    mainStore.logOut();
    location. reload();
  } 
 // ocultar el loader
  mainStore.requestToFalse();

  return Promise.reject(error);
});