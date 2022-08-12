<template>
  <div class="p-8">
    <div class="grid grid-cols-3 gap-3 border border-cyan-600">
      <h3 class="text-primary text-lg"> Ticket Actual</h3>
      <div v-show="currentTicket">hola</div>
      <div v-show="currentTicket">hola</div>
      <div v-show="currentTicket">hola</div>
      <div v-show="currentTicket">hola</div>
      <div v-show="currentTicket">hola</div>
    </div>
  </div>  
</template>

<script setup>
import { ref } from 'vue';

const currentTicket = true;
</script>

<style scoped>

</style>