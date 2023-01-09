<template>
  <div class="w-full h-full rounded-lg flex shadow-lg">
    <!-- barra izquierda para chats -->
    <div class="w-1/4 shadow">
      <!-- buscador de personas -->
      <div class="h-[10%] w-full border-b-2">
        <searching-bar @search="searchChat"/>
      </div>
      <!-- chats previamente abiertos -->
      <div class="h-[90%] w-full overflow-y-auto scrollbar">
        <div v-for="item in chats" :key="item.id" class="h-16">
          <chat-item :chat="item" @show-chat="loadChat"/>
        </div>
        <!-- chat item para seleccion -->
      </div>
    </div>
    <!-- barra derecha para mensajes -->
    <div class="w-3/4 shadow flex flex-col border-l-2">
      <!-- chat seleccionado -->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
// imports
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';
import { useMainStore } from '../../../stores/mainStore';
import { socket } from '@/services/socket.js';

// componentes 
const ChatItem = defineAsyncComponent(() => import('../components/ChatItem.vue'));
// const ActiveChat = defineAsyncComponent(() => import('../components/ChatConversation.vue'));
const SearchingBar = defineAsyncComponent(() => import('@/components/SearchingBar.vue'));
// storage
const mainStore = useMainStore();
//states
const chats = ref(null);
// chat elejido
const currentChat = ref(null);
// variable boleana q permite escribir o no en el componente conversacion
const allowChat = ref(false);
// metodos

//1 recibimos en el envento un string que viene del componente  barra de busqueda
const searchChat = (searchString) =>{
  if(mainStore.getSearchedClient(searchString)){
    chats.value = mainStore.getSearchedClient(searchString);
  }else chats.value = mainStore.getClients;
}

//setear  custom chat
const loadChat = (chatId) => {
  //cargar informacion del chat
  socket.emit('chat:join-room',chatId,mainStore.logedUser.id);
  mainStore.resetMsgCount(chatId)
}
// enviar mensaje 
const sendMsg = (msg) =>{
  socket.emit('chat:private-msg',msg);
}
// life cicle
onMounted(async () => {
  //coneccion con el soccket
  socket.connect();
  //guardar cliente en el socket
  socket.emit('chat:store-cliente',mainStore.logedUser);
  //guardar los chats al ser recibidos 
  socket.on('chat:send-chats',(data) =>{
    mainStore.setChatClients(data);
    chats.value = mainStore.getClients;
  });
  //setear el chat 
  socket.on('chat:join-room',async (chat) => {
    //seterar current chat
    mainStore.setCurrentChat(chat);
    allowChat.value = true;
  });

  socket.on('chat:private-msg',(msg) => {
    mainStore.addMsgToCurrentChat(msg);
  });

  socket.on('chat:msg-notification', (chatId) => {
    mainStore.incrementMsgCount(chatId);
    document.title = '(1) Mensaje Nuevo';
  })
});

onUnmounted(() =>{
  socket.disconnect();
  mainStore.currentChat = undefined;
  document.title = 'SGT';
});
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }

.scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #c4c9cb;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #989ea1;
}
</style>