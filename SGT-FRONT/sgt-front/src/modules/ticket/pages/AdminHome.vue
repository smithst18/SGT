<template>
  <div class="w-full h-full border border-cyan-900 p-10 grid grid-col-1 grid-rows-2 rounded-lg">
    <div class="border border-cyan-500">
      <pie-chart 
        width="400px" height="200px"
        :data="[['Blueberry', 44], ['Strawberry', 23],['prueba',55]]" 
        ></pie-chart>
    </div>
    <div class="border border-cyan-500">
      aqui va informacion
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>