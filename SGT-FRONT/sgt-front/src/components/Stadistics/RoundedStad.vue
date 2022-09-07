<template>
  <div class="h-full p-5 flex shadow-sm">

    <div class="h-full w-3/4">
      <h3 class="text-center text-primary uppercase tracking-wide text-xs font-bold mb-2">{{title}}</h3>
      <pie-chart :data="data" height="90%" :donut="true"></pie-chart>
    </div>

    <div class="h-full w-1/2 grid grid-cols-3 overflow-y-auto">
      <div v-for="item in data" :key="item[0]" class="text-center shadow-sm mb-3 h-10">
        <p class="text-primary text-xs">{{item[0]}}</p>
        <p class="text-sm">{{item[1]}}%</p>
      </div>
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  data:{
    required:true,
    type:Object,
  },
  title:{
    required:true,
    type:String,
  }
});

</script>

<style>

</style>