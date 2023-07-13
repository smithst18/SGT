<script setup>
import ProgressBar from '../../../components/ProgressBar.vue';
import DataTable from '../../../components/DataTable/DataTable.vue';
import { useMainStore } from '../../../stores/mainStore';
import { onMounted } from 'vue';
const mainStore = useMainStore();

onMounted( async () => {
    await mainStore.setSurveys();
});
</script>

<template>
    <div class="w-full h-full rounded p-2 shadow-lg">
        <div class="w-4/5 mx-auto mt-5" id="grafica">
            <h4 class="text-center text-sm mb-2"> ¿Es de tu agrado ser parte del equipo del Pescalba?</h4>
            <ProgressBar :progressporcentage="mainStore.getSurveyPorcentage" v-if="mainStore.getSurveyPorcentage"/>
        </div>
        <div id="tabla" class="md:h-[85%] lg:h-[85%] xl:h-[80%] 2xl:h-[85%] mt-10" v-if="mainStore.getSurveys.length >=1">
            <DataTable :titles="['Usuario','Cedula','pregunta 1','pregunta 2','opinion']"
                        :data="mainStore.getSurveys"
                        :showPagination="true"
                        :elementsPerPage="5"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>