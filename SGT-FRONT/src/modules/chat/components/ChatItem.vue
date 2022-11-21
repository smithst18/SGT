<template>
  <div class="flex items-center pointer hover:bg-slate-100 h-full w-full">
    <div class="w-[20%] flex">
      <font-awesome-icon :icon="['fa','user']" class="text-primary h-6 w-6 m-auto"/>
    </div>
    <div class="w-[80%] h-[80%]">
      <h5 class="capitalize text-md text-ellipsis overflow-hidden h-1/2">Maria eugenia de la pe;a</h5>
      <p class="text-sm text-slate-500 text-ellipsis overflow-hidden h-1/2">
        aqui va el mensaje que puede ser largo y deberia cortarse
      </p>
    </div> 
  </div>
</template>

<script setup>
</script>

<style>

</style>