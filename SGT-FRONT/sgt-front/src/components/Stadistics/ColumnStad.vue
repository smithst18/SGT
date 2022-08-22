<template>
  <div class="border border-cyan-400 h-full p-5 flex">
    <div class="h-full w-3/4 shadow-md ml-auto mr-auto">
        <h3 class="text-center text-primary uppercase tracking-wide text-xs font-bold mb-2">
            {{title}}
        </h3>
      <column-chart :data="stadisticData" height="80%"></column-chart>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

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

const stadisticData = ref([['Sun', 32], ['Mon', 46], ['Tue', 28],['fri', 32], ['seg', 46], ['jhg', 28],['6', 32], ['sdf', 46], ['fd', 28]]);
</script>

<style>

</style>