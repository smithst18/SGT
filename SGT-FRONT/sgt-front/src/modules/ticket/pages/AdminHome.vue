<template>
  <div class="w-full h-full grid grid-col-1 grid-rows-2" 
  v-if="pieData.length >= 1 && barsData">
    <div class="h-full">
      <TechStads title="Soportes Por Tecnico" :data="pieData"/>
    </div>
    <div class="h-full">
      <EntityStads title="Soportes Anuales por Departamento" :data="barsData"/>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { getGeneralStads } from '@/services/stadisticService.js';
const TechStads = defineAsyncComponent(() => import("@/components/Stadistics/RoundedStad.vue"));
const EntityStads = defineAsyncComponent(() => import("@/components/Stadistics/ColumnStad.vue"));

const pieData = ref([]);
const barsData = ref({});

(async () => {
  const { data:{ data:{ techPersent, ticketsPerEntity}} } = await getGeneralStads();
  pieData.value = techPersent;
  barsData.value = ticketsPerEntity;
})()
</script>

<style>

</style>