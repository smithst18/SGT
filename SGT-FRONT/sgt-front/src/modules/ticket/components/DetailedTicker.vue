<template>
  <div class="p-6 flex flex-row h-full w-full">

    <div class="h-full text-center mr-5 basis-1/6  flex flex-col">

      <p class="text-primary uppercase tracking-wide text-md font-bold">
        Ticket Actual:
      </p>

      <button class="border p-1 mt-auto w-full rounded-md border-primary text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring text-center"  v-if="currentTicket">
        <span class="mr-2"> Cerrar </span>

        <font-awesome-icon :icon="['fa','file-circle-check']"></font-awesome-icon>
      </button>

    </div>

    <div class="border basis-5/6 flex flex-row flex-wrap gap-x-4 text-center" v-if="currentTicket">
      <div class="basis-1/4 border">
        <p class="capitalize text-sm text-ellipsis"> 
          title: 
          <span class="text-slate-700 text-sm"> 
            data 
          </span>
        </p>
      </div>
    </div>

    <!-- si no hay data mostramos esto -->
    <div class="basis-5/6 p-1" v-if="!currentTicket">
      <p class="text-primary tracking-wide text-sm font-bold">
        No has tomado ningun ticket aun...
      </p>
    </div>

  </div>  
</template>

<script setup>
import { ref } from 'vue';

const currentTicket = true;
</script>

<style scoped>

</style>