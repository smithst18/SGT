<template>

  <div class="w-full h-full grid grid-col-1 grid-rows-2 shadow-lg" 
    v-if="pieData.length >= 1 && barsData">
    
    <div id="element-to-print">

      <div class="h-full">
        <TechStads title="Soportes Por Tecnico:" :data="pieData"/>
      </div>

      <div class="h-full">
        <EntityStads title="Soportes Anuales por Departamentos:" :data="barsData"/>
      </div>

    </div>

    <button class="absolute bottom-10 right-10 border px-6 py-4 rounded-full bg-primary text-white shadow-md hover:bg-white hover:text-primary border-primary focus:ring-2"
      @click="downloadPdf"> 
      <font-awesome-icon :icon="['fa','file-arrow-down']" class="text-md">
      </font-awesome-icon>
    </button>
  </div>

  <div v-else class="flex items-center justify-center w-full h-full shadow-lg">
    <h3 class="text-primary">
      No hay data disponible para las estadisticas ...
    </h3>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { getGeneralStads } from '@/services/stadisticService.js';

const TechStads = defineAsyncComponent(() => import("@/components/Stadistics/RoundedStad.vue"));
const EntityStads = defineAsyncComponent(() => import("@/components/Stadistics/ColumnStad.vue"));

const pieData = ref([]);
const barsData = ref({});

const downloadPdf = () => {
  var element = document.getElementById('element-to-print');
  var opt = {
    margin:       [1, 0, 0, 0],
    filename:     'report.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'l', floatPrecision:'smart' },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
};

onMounted( async () => {
  const { data:{ data:{ techPersent, ticketsPerEntity } } } = await getGeneralStads();
  pieData.value = techPersent;
  barsData.value = ticketsPerEntity;
})
</script>

<style>

</style>