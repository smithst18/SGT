<script setup>
import ProgressBar from "../../../components/ProgressBar.vue";
import DataTable from "../../../components/DataTable/DataTable.vue";
import { useMainStore } from "../../../stores/mainStore";
import { onMounted } from "vue";
const mainStore = useMainStore();

onMounted(async () => {
  await mainStore.setSurveys();
});
</script>

<template>
  <div class="w-full h-full rounded p-2">
    <div class="w-full h-[20%] mx-auto mt-5 overflow-y-auto border p-8" id="grafica">
      <ol class="grid grid-cols-3 gap-4 p-4">
        <li class="p-2 bg-slate-50 p-5">1: ¿Conoce usted los valores que representan la institución Pescalba?</li>
        <li class="p-2 bg-slate-50 p-5">2: Mencione al menos 3 valores.</li>
        <li class="p-2 bg-slate-50 p-5">3: ha visto algun cambio positivo en la operatividad de la empresa ?</li>
        <li class="p-2 bg-slate-50 p-5">4: Si su respuesta es positiva, cuales ha notado ?</li>
        <li class="p-2 bg-slate-50 p-5">5: Que propuestas tendrias para mejorar la operatividad de la empresa ?</li>
        <li class="p-2 bg-slate-50 p-5">6: Que areas priorizarias y porque ?</li>
        <li class="p-2 bg-slate-50 p-5">7: Nos sigues en redes sociales como @Pescalba ?</li>
        <li class="p-2 bg-slate-50 p-5">8: En caso de seguirnos, interactuas con nuestro contenido ?</li>
        <li class="p-2 bg-slate-50 p-5">9: En caso de seguirnos, interactuas con nuestro contenido ?</li>
        <li class="p-2 bg-slate-50 p-5">10: ¿Estarías dispuesto a participar en nuestras redes sociales (Videos, fotos y contenido en general)?</li>
        <li class="p-2 bg-slate-50 p-5">11: ¿Conoce cuál es la importancia de la proyección de la empresa para su operatividad y avance?</li>
      </ol>
      <ProgressBar
        :progressporcentage="mainStore.getSurveyPorcentage"
        v-if="mainStore.getSurveyPorcentage"
      />
    </div>

    <div
      id="tabla"
      class="md:h-[70%] lg:h-[70%] xl:h-[70%] 2xl:h-[70%] mt-10"
      v-if="mainStore.getSurveys.length >= 1"
    >
      <DataTable
      class="!h-full"
        :titles="['Cedula', 'pregunta 1', 'pregunta 2', 'pregunta 3','pregunta 4','pregunta 5','pregunta 6','pregunta 7','pregunta 8','pregunta 9','pregunta 10','pregunta 11']"
        :data="mainStore.getSurveys"
        :showPagination="true"
        :elementsPerPage="20"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
