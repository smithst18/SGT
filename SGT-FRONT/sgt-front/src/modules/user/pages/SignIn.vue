<template>
  <div class="w-full h-full border border-cyan-900 px-10 justify-center rounded-lg">
    <!-- title -->
    <h3 class="text-primary text-lg m-6 text-center">Registro de Usuario</h3>
    <!-- form user registration  -->
    <div class="">
      <UserForm />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const UserForm = defineAsyncComponent( () => import('../components/UserForm.vue'));

</script>

<style>

</style>
<!-- <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
      Descripcion
    </label>
    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" placeholder="Breve Descripcion">
    </textarea>
    <p class="text-gray-600 text-xs italic">Descripcion que defina apropiadamente el problema</p>
  </div>
</div> -->