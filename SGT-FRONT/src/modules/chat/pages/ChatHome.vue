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
        <div v-for="n in 10" :key="n" class="h-16">
          <chat-item/>
        </div>
        <!-- chat item para seleccion -->
      </div>
    </div>
    <!-- barra derecha para mensajes -->
    <div class="w-3/4 shadow flex flex-col">
      <!-- chat seleccionado -->
      <active-chat/>
    </div>
  </div>
</template>

<script setup>
// imports
import { defineAsyncComponent, onMounted } from 'vue';
import { useMainStore } from '../../../stores/mainStore';
// componentes 
const ChatItem = defineAsyncComponent(() => import('../components/ChatItem.vue'));
const ActiveChat = defineAsyncComponent(() => import('../components/ChatConversation.vue'));
const SearchingBar = defineAsyncComponent(() => import('@/components/SearchingBar.vue'));

// storage
const mainStore = useMainStore();

// metodos

//1 recibimos en el envento un string que viene del componente  barra de busqueda
const searchChat = (searchString) =>{
  if(mainStore.getSearchedClient(searchString)) console.log( mainStore.getSearchedClient(searchString));
}

// life cicle
onMounted(async () => {
  await mainStore.setChatClients();
});
</script>

<style>
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