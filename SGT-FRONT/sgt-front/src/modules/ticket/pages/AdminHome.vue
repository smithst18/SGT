<template>
  <div class="w-full h-full border border-cyan-900 grid grid-col-1 grid-rows-2 rounded-lg">
    <div class="h-full">
      <BestTech title="Soportes Por Tecnico"/>
    </div>
    <div class="h-full">
      <EntityStads title="Soportes Anuales por Departamento"/>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const BestTech = defineAsyncComponent(() => import("@/components/Stadistics/RoundedStad.vue"));
const EntityStads = defineAsyncComponent(() => import("@/components/Stadistics/ColumnStad.vue"));
</script>

<style>

</style>