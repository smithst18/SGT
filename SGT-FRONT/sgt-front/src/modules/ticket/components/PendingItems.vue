<template>
  <div class="shadow-md flex gap-x-5 p-3 w-full rounded" @click="emitValue()">
    <!-- user profile icon -->
    <font-awesome-icon :icon="['fa','file-circle-exclamation']" class="h-6 text-primary">
    </font-awesome-icon>

    <div class="overflow-hidden">
      <h3 class="text-primary uppercase tracking-wide text-xs font-bold mb-2">
          aqui va el titulo
      </h3>
      <div class="grid gap-1">
        <div class="w-full" v-for="(elem, key) in data" :key="elem">
          <p class="capitalize text-sm">{{key}}: <span class="text-slate-700">{{elem}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['getId']);
const props = defineProps({
    data:{
        type: Object,
        required: true,
    },
});

const emitValue = () =>{
  emit('getId',props.data.id);
} 
</script>
<style>

</style>