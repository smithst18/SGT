<template>
  <div class="w-full h-full px-10 justify-center rounded-lg shadow-lg">
    <!-- title -->
    <h3 class="text-primary text-md m-6 text-center uppercase tracking-wide font-bold mb-5">
      Actualizar perfil 
    </h3>
    <!-- form user registration  -->
    <div>
      <UpdateFormulary />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const UpdateFormulary = defineAsyncComponent( () => import('../components/updateForm.vue'));
</script>

<style scoped>

</style>