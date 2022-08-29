<template>
  <div class="border border-cyan-400 h-full p-5 flex">

    <div class="h-full w-3/4 shadow-md">
      <h3 class="text-center text-primary uppercase tracking-wide text-xs font-bold mb-2">{{title}}</h3>
      <pie-chart :data="stadisticData" height="90%" :donut="true"></pie-chart>
    </div>

    <div class="h-full w-1/2 grid grid-cols-3 overflow-y-auto">
      <div v-for="item in stadisticData" :key="item[0]" class="text-center shadow-sm mt-auto mb-3">
        <p class="text-primary text-xs">{{item[0]}}</p>
        <p class="text-sm">{{item[1]}}%</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { required } from "@vuelidate/validators";

const props = defineProps({
  data:{
    required:true,
    type:Object,
  },
  title:required,
  type:String,
});

const stadisticData = ref([['Sun', 32], ['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28],['Sun', 32],['Mon', 46], ['Tue', 28]]);

</script>

<style>

</style>