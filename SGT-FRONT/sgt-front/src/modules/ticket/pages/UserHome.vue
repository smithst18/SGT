<template>
  <div class="w-full h-full border border-cyan-900 p-10 justify-center rounded-lg">
    <!-- title -->
    <h3 class="text-primary text-lg mb-8">Apertura de Ticket</h3>
    <!-- form ticket  -->
    <FormTicket />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const FormTicket = defineAsyncComponent(() => import("../components/FormTicket.vue"));
</script>

<style scoped>

</style>