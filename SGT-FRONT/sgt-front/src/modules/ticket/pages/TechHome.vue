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
import { defineAsyncComponent, onMounted, provide } from 'vue';
import { useTicketStore } from '../store/ticketStore';
const ticketStore = useTicketStore();
const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));
const MyTicketsList = defineAsyncComponent(() => import('../components/TicketTableLists.vue'));
//esta data tiene que cambiar 
const data = [
        {estado:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
];


const titles = [
    "item",
    "tipo",
    "estado",
    "solicitante",
    "fecha",
    // "descripcion",
]

onMounted(() => {
    ticketStore.setClosedTicket();
})
</script>


<style scoped>

</style>