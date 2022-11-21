<template>
  <div class="w-full h-full rounded-lg flex shadow-lg border border-gray-100">
    <!-- barra izquierda para chats -->
    <div class="w-1/4">
      <!-- buscador de personas -->
      <div class="h-[10%] w-full border-b-2 border-gray-50 flex items-center text-center">
        <searching-bar/>
      </div>
      <!-- chats previamente abiertos -->
      <div class="h-[90%] border overflow-y-auto scrollbar">
        <div v-for="n in 10" :key="n" class="border h-[12%]">
          <chat-item/>
        </div>
        <!-- chat item para seleccion -->
      </div>
    </div>
    <!-- barra derecha para mensajes -->
    <div class="w-3/4 border flex flex-col">
      <!-- chat seleccionado -->
      <active-chat/>
    </div>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  const ChatItem = defineAsyncComponent(() => import('../components/ChatItem.vue'));
  const ActiveChat = defineAsyncComponent(() => import('../components/ChatConversation.vue'));
  const SearchingBar = defineAsyncComponent(() => import('@/components/SearchingBar.vue'))

</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
    width: 7px;
    height: 2px;
  }

.scrollbar::-webkit-scrollbar-track {
    background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #71b4cc;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #0B698B;
}
</style>