import app from './app';
import http from "http"
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


export { server, io }