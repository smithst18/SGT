<template>
    <div class="w-full h-full grid grid-cols-1 grid-rows-4 gap-y-5 ">
        <div class="rounded-lg shadow-md">
            <CurrentTicket 
            class="pointer"
            :ticket="ticketStore.getCurrent"
            title ="Ticket Pendiente:"
            :icon="['fa','file-circle-xmark']"
            btnTitle="Devolver"
            @return="rtnTicket"
            @click="toggleModal"/>
        </div>
        <div class="row-span-3 rounded-lg shadow-md">
            <div class="p-8 h-full">
                <h3 class="text-primary text-md mb-6 block uppercase tracking-wide font-bold">
                    Mis tickets
                </h3>
                <div class="p-2 h-[90%]">
                <!-- pasarle la data de los ticket a la tabla  -->
                    <div class="h-full">
                        <TicketTable 
                            :titles="['item','tipo','estado','solicitante','fecha']"
                            :data="ticketStore.getMyTickets"
                            :showPagination="true"
                            :elementsPerPage="10"/>
                    </div>
                </div>
            </div> 
        </div>
        <currentTicketsModal 
        :showModal="showModal"
        @close-modal="toggleModal">
            <template #header>
                <p class="text-md text-primary font-bold"
                v-if="ticketStore.getAceptedTicketsByTech.length >= 1">Tickets aceptados por cerrar:</p>
                <p class="text-md text-primary font-bold"
                v-else>No hay Pendientes</p>
            </template>
            <template #body>
                <div class="text-sm" v-if="ticketStore.getAceptedTicketsByTech.length >= 1">
                    <TicketTable 
                        :titles="['item','tipo','estado','solicitante','fecha','hora','descripcion','entidad']"
                        :data="ticketStore.getAceptedTicketsByTech"
                        :showPagination="true"
                        :elementsPerPage="10"/>
                </div>
                <div v-else>
                    <p>Actualmente no tienes solicitudes aceptadas</p>
                </div>
            </template>
            <template #footer>
                <hr />
            </template>
        </currentTicketsModal>
    </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, inject} from 'vue';
import { useTicketStore } from '../store/ticketStore';
import { useModal } from '@/composables/useModal';

const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));
const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable/DataTable.vue'));
const currentTicketsModal = defineAsyncComponent(() => import('@/components/BasicModal.vue'));
const ticketStore = useTicketStore();
const swal = inject('$swal');
const { showModal, toggleModal } = useModal();
//methods
const rtnTicket = (value) => {
    swal({
        title:'Devolver Ticket ?',
        text:'Estas seguro ?',
        icon:'question',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            ticketStore.returnPendingTicket(value)
            swal.fire('Ok!!', 'has devuelto el ticket', 'success');
        }
    });
}
onMounted( async () => {
    await ticketStore.setClosedTickets();
    await ticketStore.setCurrentTicket();
    await ticketStore.setaceptedTicketsByTech();
});
</script>

<style scoped>

</style>