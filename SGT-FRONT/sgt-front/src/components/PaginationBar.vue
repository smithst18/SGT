<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" v-if="pages">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Mostrando de 
        <span class="font-medium">1</span>
        a
        <span class="font-medium">10</span>
        de
        <span class="font-medium">{{totalPages}}</span>
        Resultados
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" 
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click="incrementPage(actualPage)">
          <span class="sr-only">Anterior</span>
          <!-- Heroicon name: solid/chevron-left -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" class="pagination-item" 
          v-for="page in pages" 
          :key="page"
          @click="$emit('miEventoChild',page)">
          {{ page }} 
        </a>

        <a href="#" 
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click="decrementPage(actualPage)">
          <span class="sr-only">Siguiente</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";


const props = defineProps({
  pages:{
    type:Number,
    required:true
  },
  totalPages:{
    type:Number,
    required:true,
  }
});
const getActualPage = () =>{
  console.log(props.pages)
}
const incrementPage = () => {
  console.log('hola');
}
const decrementPage = () => {
  console.log('hola');
}

onMounted(() =>{ console.log(props)});

</script>


<style scoped>
.pagination-item{
    @apply bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium
}
.pagination-item-active{
    @apply z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium
}
</style>