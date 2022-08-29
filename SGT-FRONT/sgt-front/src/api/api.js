import axios from "axios";
// import 'dotenv/config';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzAxNmRjZGNkNWNmOWVhOWI5NmQ0MmEiLCJ1c2VyTmFtZSI6ImVsIGNvbWJpIiwicm9sIjoidXNlciIsInBvc2l0aW9uIjoiNjJlM2RmOTY0ZGIyMzU0ODQ3ZTM0NjJjIiwiaWF0IjoxNjYxNjM3NjUyLCJleHAiOjE2NjE3MjQwNTJ9.tqpjiA-H8jazi_CUq99_QBc9VF1gfTtkWlDCtDLyjI4"

export const api = axios.create({
  baseURL: 'http://localhost:3200/api/',
  timeout: 3000,
  headers: {'Authorization': `bearer ${token}`}
});

// api.interceptors.request.use(() => {
//   console.log("estoy interviniendo todas las queres hijo de tu putisima madre");
// })