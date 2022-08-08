<template>
    <div class="p-8 h-full border-cyan-200">
        <h3 class="text-primary text-lg mb-8"> Mis Soportes</h3>
        <div class="overflow-y-auto border border-cyan-200 p-2 h-5/6">
            <!-- pasarle la data de los ticket a la tabla  -->
            <TicketTable />
        </div>
        <!-- crear un modal para los detalles -->
    </div>  
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';

    const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable.vue'));
</script>

<style scoped>

</style>