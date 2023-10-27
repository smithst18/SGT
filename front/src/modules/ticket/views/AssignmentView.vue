<script setup lang='ts'>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const TicketInfoCard = defineAsyncComponent(() => import('@/modules/ticket/components/TicketInfCard.vue'));

const ticket = {
    id: 15,
    title:"Error en computadora",
    status:"urgente",
    description:"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "25-15  08:17",
    requester:"maria gonzales",
    location:"comunicaciones",

}
const ticket2 = {
    id: 15,
    title:"Error en computadora",
    status:"abierto",
    description:"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "25-15  08:17",
    requester:"maria gonzales",
    location:"comunicaciones",

}
const ticket3 = {
    id: 15,
    title:"Error en computadora",
    status:"cerrado",
    description:"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "25-15  08:17",
    requester:"maria gonzales",
    location:"comunicaciones",

}
const ticket4 = {
    id: 15,
    title:"Error en computadora",
    status:"espera",
    description:"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "25-15  08:17",
    requester:"maria gonzales",
    location:"comunicaciones",

}


</script>

<template>
    <div class="w-full h-full overflow-y-auto"> 
        <TicketInfoCard :ticket="ticket"/>
        <TicketInfoCard :ticket="ticket2"/>
        <TicketInfoCard :ticket="ticket3"/>
        <TicketInfoCard :ticket="ticket4"/>

    </div>
</template>

<style scoped lang='scss'>

</style>