<script setup lang="ts">
import ticketInfoCard from '@/components/commons/InfoCard.vue';
import DataTable from '@/components/table/DataTable.vue';
</script>

<template>
    <div class="w-full h-full">
        <div class="flex items-center justify-around w-full h-1/3">
            <ticketInfoCard title="Tickets Cerrados" :porcentValue="32"  :percentage="null" src-img="../../src/assets/icons/logout.svg"/>
            <ticketInfoCard title="Tickets Abiertos"  :porcentValue="45" :percentage="null" src-img="../../src/assets/icons/logout.svg"/>
            <ticketInfoCard title="Tickets Completados" :porcentValue="75" percentage="%" src-img="../../src/assets/icons/logout.svg"/>
        </div>
       <div class="w-full h-2/3 px-5 py-2 ">
            <DataTable/>
       </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>
