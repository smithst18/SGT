<script setup>
import ProgressBar from '../../../components/ProgressBar.vue';
import DataTable from '../../../components/DataTable/DataTable.vue';
</script>

<template>
    <div class="w-full h-full rounded p-2 shadow-lg">
        <div class="w-4/5 mx-auto mt-5" id="grafica">
            <h4 class="text-center text-sm mb-2"> ¿Es de tu agrado ser parte del equipo del Pescalba?</h4>
            <ProgressBar progressporcentage="70"/>
        </div>
        
        <div id="tabla" class="h-[85%] mt-10">
            <DataTable :titles="['Usuario','resp 1','resp 2','resp 3','fecha']"
                        data="true"
                        :showPagination="true"
                        :elementsPerPage="10"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>