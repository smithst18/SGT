<template>
  <div class="p-6 flex flex-row h-full w-full justify-center">

    <div class="h-full text-center mr-5 basis-1/6  flex flex-col">

      <p class="text-primary uppercase tracking-wide text-md font-bold">
        {{ title }}
      </p>

      <button 
        class="p-1 mt-auto w-full rounded-md border border-primary text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring text-center "  
        v-if="ticket.id"
        @click="$emit('return',ticket.id)">
        <span class="mr-2"> {{ btnTitle }} </span>

        <font-awesome-icon :icon="icon"></font-awesome-icon>
      </button>

    </div>
    
    <div class="basis-5/6 flex flex-row flex-wrap gap-2 text-center justify-between content-center" 
      v-if="ticket.id">
      <div class="capitalize text-xs text-ellipsis" v-for="(elem,key) in ticket" :key="elem">
        <div 
          :class="{ 'hidden': key == 'id'}">
          <p class="mb-3 uppercase whitespace-nowrap font-semibold text-primary"> 
            {{key}}:
          </p>
          <p :class="{ 'text-emerald-500': elem == 'En curso', 'text-orange-300': elem == 'Pendiente'}">
            {{elem}}
          </p>
        </div>
      </div>
    </div>

    <!-- si no hay data mostramos esto -->
    <div class="basis-5/6 p-1" v-if="!ticket.id">
      <p class="text-primary tracking-wide text-sm font-bold text-center">
        No has tomado ningun ticket aun...
      </p>
    </div>

  </div>  
</template>

<script setup>
const props = defineProps({
  title:{
    require:true,
    type:String,
  },
  btnTitle:{
    require:true,
    type:String,
  },
  icon:{
    required:true,
    type:Array,
  },
  ticket:{
    require:true,
    type:Object,
  },
});

</script>

<style scoped>

</style>