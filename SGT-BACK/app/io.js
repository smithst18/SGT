import app from './app';
import http from "http"
import { Server } from "socket.io";
import { createServer } from "http";
//import of services

import { getChats, findOrCreateChat, saveChat } from './socket/chat';

const httpServer = createServer(app);

const io = new Server();

io.attach( httpServer, {
  cors: {
    origin: `${process.env.FRONT_ORIGIN_URL}`,
  },
});

let clients = [];
let chatToJoin = {};

io.on('connection', async (socket) => {

  console.log('conectado',socket.id);

  socket.on('chat:store-cliente', async (data) => {

    let client = {
      socketId:socket.id,
      clientId:data.id,
      nickName:data.nickName
    }
    
    clients.push(client);

    const chats = await getChats(client.clientId);

    socket.emit('chat:send-chats',chats);
  });


  socket.on('chat:join-room',async (receiver,sender) => {

    chatToJoin = await findOrCreateChat(receiver,sender);

    if(chatToJoin) {
      //enviar el chat 
      socket.emit('chat:join-room',chatToJoin);
      //unir el socket al chat
      const idToString = chatToJoin.id;
      //unir socket a la sala/salas
      socket.join(idToString.toString());

      console.log('socket unido a room :',idToString);

      console.log(socket.rooms);
    }else console.log('error creando chat');
  });
  
  socket.on('chat:private-msg',async (msg) => {
    const chatSaved = await saveChat({ id:chatToJoin.id, data:msg });
    if(chatSaved) io.to(chatToJoin._id.toString()).emit('chat:private-msg',msg);
    else console.log('error guardando el chat');
  });

  socket.on('disconnect', () => {
    console.log('se ha desconectado',socket.id)

    clients.splice(clients.map((elm) => elm.socketId).indexOf(socket.id),1);
  });

  
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
});


export { httpServer, io }