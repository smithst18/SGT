<script setup lang="ts">
import { ref } from "vue";


const props = defineProps<{
    pages:number,
    elementsPerPage:number,
    results:number
}>();

const activeIndex = ref(0);

const emit = defineEmits<{
    (event: 'dataPagination',pages:number):void,
    (event: 'nextPage'):void
    (event: 'prevPage'):void
}>();

const clickedPage = ( page:number, index:number ) =>{
  activeIndex.value = index;
  emit('dataPagination',page);
}

const prevArroy = () =>{
  if(activeIndex.value > 0) {
    activeIndex.value -= 1;
    emit('prevPage')
  }
}

const nextArroy = () =>{
  if(activeIndex.value < props.pages - 1) {
    activeIndex.value += 1;
    emit('nextPage');
  }
}

</script>

<template>
    <div class="flex items-center border border-purple-900 w-full h-full">
        <div class="border border-green-500">
            <span>mostrando datos de 1 a 8 de 500 entradas</span>
        </div>
        <nav class="ml-auto">
            <ul class="border border-blue-500">
                <li @click="prevArroy"><a href="#">&lt;</a></li>

                <li 
                    v-for="(page, index) in pages"
                    :class="activeIndex === index ? 'text-primary-light' : 'text-third'" 
                    :key="page">
                    <a href="#">
                        {{ page }}
                    </a>
                 </li>

                <li @click="nextArroy"><a href="#">></a></li>
            </ul>
        </nav>
    </div>
</template>



<style scoped>
    nav>ul{
        @apply list-none flex items-center justify-end
    }
    nav>ul>li{
        @apply  border rounded-md mx-1 py-1 w-8 h-8 text-center cursor-pointer font-semibold text-third hover:text-primary-light
    }
</style>