import { io } from 'socket.io-client';

// URL a donde nos vamos a conectar con su puerto
const URL = import.meta.env.VITE_API_URL;

const socket = io(URL, { 
  autoConnect: false,
  // withCredentials: true
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export { socket };