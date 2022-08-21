import axios from "axios";
// import 'dotenv/config';
const token = "saldjadsjl"

export const api = axios.create({
  baseURL: 'http://localhost:3200/api/',
  timeout: 3000,
});

// api.interceptors.request.use(() => {
//   console.log("estoy interviniendo todas las queres hijo de tu putisima madre");
// })