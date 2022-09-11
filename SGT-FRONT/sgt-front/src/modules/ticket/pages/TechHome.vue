<template>
    <div class="w-full h-full grid grid-cols-1 grid-rows-4 gap-y-5 ">
        <div class="rounded-lg shadow-md">
            <CurrentTicket 
            :ticket="ticketStore.getCurrent"
            title ="Ticket Pendiente:"
            :icon="['fa','file-circle-xmark']"
            btnTitle="Devolver"
            @return="rtnTicket"/>
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
    </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, reactive ,inject} from 'vue';
import { useTicketStore } from '../store/ticketStore';

const ticketStore = useTicketStore();
const swal = inject('$swal');
const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));
const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable/DataTable.vue'));

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
})
</script>

<style scoped>

</style>