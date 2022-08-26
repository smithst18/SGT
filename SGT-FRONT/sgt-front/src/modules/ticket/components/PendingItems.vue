<template>
  <div class="border border-red-500 shadow-lg flex gap-x-5 p-3">
    <!-- user profile icon -->
    <div class="border border-cyan-500 w-10 h-10 text-center p-1 rounded-full">
      <font-awesome-icon :icon="['fa','user']" class="h-6"></font-awesome-icon>
    </div>
    <div class="">
      <h3 class="text-primary uppercase tracking-wide text-xs font-bold mb-2">
          aqui va el titulo.
      </h3>
      <div class="grid gap-1 text-slate-700 border text-xs">
        <div class="border" v-for="(elem, key) in data" :key="elem">
          <p class="text-ellipsis overflow-hidden w-44" v-if="key !== 'id'">{{key}} : <span>{{elem}}</span></p>
        </div>
      </div>
    <button class="bottom-0 right-0 h-16 w-16">
      <font-awesome-icon :icon="['fa','user']" class="h-6" />
      </button>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    titles:{
      type:Array,
      required:true,
    },
    data:{
        type: Object,
        required: true,
    },
});

</script>

<style>

</style>