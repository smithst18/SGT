import app from './app';
import http from "http"
import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer(app);

const io = new Server();

io.attach( httpServer, {
  cors: {
    origin: `${process.env.FRONT_ORIGIN_URL}`,
  },
})
const clients = [];

io.on('connection', (socket) => {

  console.log('a user connected',socket.id);
  
  socket.on('log',(user) =>{
    clients.push(user);
    console.log(clients);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
});


export { httpServer, io }