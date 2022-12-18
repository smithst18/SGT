import { io } from 'socket.io-client';

// URL a donde nos vamos a conectar con su puerto
const URL = import.meta.env.VITE_API_URL;

const socket = io(URL, { autoConnect: false, reconnection:false });

//sirve para ver todos los eventos y argumentos pasados en cualquier evento socket
//socket.onAny((event, ...args) => { console.log(event, args) });

export { socket };