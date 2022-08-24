<template>
  <div class="border border-red-500 shadow-lg flex gap-x-5 p-3">
    <!-- user profile icon -->
    <div class="border border-cyan-500 w-10 h-10 text-center p-1 rounded-full">
      <font-awesome-icon :icon="['fa','user']" class="h-6"></font-awesome-icon>
    </div>
    <div>
      <h3 class="text-primary uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          aqui va el titulo
      </h3>
      <div class="grid gap-1 text-slate-700 border">
        <div class="border" v-for="elem in data" :key="elem">
          {{elem}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    data:{
        type: Object,
        required: true,
    },
    titles:{
      type:Array,
      required:true,
    }
});

</script>

<style>

</style>