<template>
  <div class="w-full h-full p-10 justify-center rounded-lg flex gap-5 shadow-lg">
    <div class="w-1/2 p-5 shadow-md">
      <!-- title -->
      <h3 class="text-primary text-md mb-8 block uppercase tracking-wide font-bold">Apertura de Ticket</h3>
      <!-- form ticket  -->
      <FormTicket />
    </div>
    <div class="w-1/2 p-5 shadow-md">
      <div class="text-center my-auto">
        <h3 class="text-primary text-md block uppercase tracking-wide font-bold">Tickets Abiertos </h3>
      </div>
      <div class="flex flex-col" v-if="ticketStore.getPendingTicketsById.length > 0">
        <div v-for="ticket in ticketStore.getPendingTicketsById" :key="ticket.id" class="shadow-sm mb-5">
          <CurrentTicket
            title="pendiente" 
            btnTitle="listo"
            :icon="['fa','file-circle-check']"
            :ticket="ticket"
            @return="clsTicket"/>
        </div>
      </div>
      <div v-else class="text-center text-primary text-md mt-20">
        0 Solicitudes Abiertas
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, inject, onMounted } from 'vue';
import { useTicketStore } from '../store/ticketStore';

const swal = inject('$swal');
const ticketStore = useTicketStore();

const FormTicket = defineAsyncComponent(() => import("../components/FormTicket.vue"));

const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));

//function que elimina un ticket del store y de la bd 
const clsTicket = (id) =>{
  swal({
        title:'Cerrar ticket ?',
        text:'Se ha completado la solicitud ?',
        icon:'question',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
  })
    .then((result) => {
      if (result.isConfirmed) {
        ticketStore.closeOneTicket(id)
        .then((resp) => {
          if(resp.status) swal.fire('ok!!', 'has cerrado tu solicitud con exito', 'success');
          else swal.fire('Error', resp.data.message, 'error');
        });
      }
    });
}

onMounted( async () =>{
  await ticketStore.setPendingTicketsByUser();
})
</script>

<style scoped>

</style>