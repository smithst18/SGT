import { ref } from '@vue/reactivity';

import { socket } from '@/services/socket';

export const useModal= () => {
  socket.on('connect',()=>{
    console.log('conectado');
  })
  
  socket.emit('log',mainStore.logedUser);

  socket.on('disconnect', () => {
    console.log('desconectado');
  });
  socket.connect()
  return {   

  }
}