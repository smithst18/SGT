<template>
    <div class="w-full h-full grid grid-cols-1 grid-rows-4 gap-y-5">
        <div class="rounded-lg shadow-md">
            <CurrentTicket />
        </div>
        <div class="row-span-3 rounded-lg shadow-md">
            <MyTicketsList  
                title="Mis Tickets"
                :titles="titles"
                :data="ticketStore.getMyTickets"/>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent, onBeforeMount, provide } from 'vue';
import { useTicketStore } from '../store/ticketStore';
const ticketStore = useTicketStore();
const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));
const MyTicketsList = defineAsyncComponent(() => import('../components/TicketTableLists.vue'));

const titles = [
    "item",
    "tipo",
    "estado",
    "solicitante",
    "fecha",
    // "descripcion",
]

onBeforeMount(() => {
    ticketStore.setClosedTicket();
})
</script>


<style scoped>

</style>