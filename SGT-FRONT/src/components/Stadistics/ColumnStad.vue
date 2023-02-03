<template>
  <div class="h-full p-5 flex shadow-sm">
    <div class="h-full w-3/4 ml-auto mr-auto">
        <h3 class="text-center text-primary uppercase tracking-wide text-xs font-bold mb-2">
            {{title}}
        </h3>
      <column-chart :data="data" height="80%"></column-chart>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";


const props = defineProps({
  data:{
    required:true,
    type:Object,
  },
  title:{
    type:String,
    required:true,
  }
});
</script>

<style scoped>

</style>