<template>
  <div class="w-full h-full p-5 shadow-lg rounded-lg">
    <h3 class="text-primary uppercase tracking-wide text-md font-bold mb-5" @click="prueba">Tickets pendientes</h3>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-2 h-[95%] overflow-y-auto"
    v-if="ticketStore.getPendingTickets.length >= 1">
      <PendingItems 
        v-for="ticket in ticketStore.getPendingTickets" 
        :key="ticket.id" 
        :data="ticket"
        @getId="takeTicket"
        class="max-h-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 duration-300 bg-white hover:cursor-pointer"/>
    </div>

    <div class="text-sm font-semibold text-primary h-[95%] flex"
      v-if="ticketStore.getPendingTickets.length < 1">
        <p class="m-auto">
          No hay Ticket en espera...
        </p>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, inject } from 'vue';
import { useTicketStore } from '../store/ticketStore';
const swal = inject('$swal');
const PendingItems = defineAsyncComponent(() => import("../components/PendingItems.vue"));
const ticketStore = useTicketStore();

const takeTicket = async (value) =>{
  swal({
    title:'Tomar Ticket ?',
    text:'Estas seguro de tomar este ticket ?',
    icon:'question',
    showDenyButton: true,
    confirmButtonText: 'Aceptar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      ticketStore.takePendingTicket(value)
        .then((resp) =>{
          //si se guarda mostrar lerta positiva
          if(resp.status) swal.fire('Ok!!', 'has tomado el ticket', 'success');
          //si no se guarda mostrar lerta negativa
          if(!resp.status) swal.fire('Saved!', resp.data.message, 'warning');
        });
    }
  });
}

onMounted( async () => {
  await ticketStore.setPendingTickets();
});
</script>

<style>
</style>