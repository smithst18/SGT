
<template>
  <div class="w-screen h-screen">
    <div 
    class="flex justify-center items-center h-screen w-screen absolute z-10 bg-gray-900 opacity-75"
    v-if="mainStore.requestLoading">
      <Loader />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
  import { useMainStore } from "./stores/mainStore";
  import { defineAsyncComponent } from 'vue';

  const mainStore = useMainStore();
  const Loader = defineAsyncComponent(() => import('@/components/TheLoader.vue'));
  
</script>
<style scoped>
</style>
