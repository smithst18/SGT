<template>
  <a class="grid grid-cols-4 pointer hover:bg-slate-100 w-full h-full border-b-2 shadow-sm" 
    @click="emit('showChat',props.chat._id)">
    <!-- imagen del perfil del chat  -->
    <div class="col-span-1 flex border-r-2" v-if="props.chat.profileImgUrl">
      <div class="w-12 h-12 m-auto rounded-full">
        <img :src="props.chat.profileImgUrl" class="w-full h-full rounded-full object-cover object-center" alt="img_profile">
      </div>
    </div>
    <!-- icono si no hay imagen -->
    <div class="col-span-1 flex border-r-2" v-else>
      <font-awesome-icon :icon="['fa','user']" class="text-primary m-auto"/>
    </div>
    <!-- data del chat -->
    <div class="col-span-3 flex items-center p-2">
      <div class="w-full h-full">
        <p class="text-sm flex mb-1">
          <span class="capitalize">
            {{ props.chat.name }}
          </span>
          <span class="text-xs ml-auto text-slate-500">
            7:30
          </span>
        </p>
        <p class="text-xs flex">
          <span class="capitalize text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis max-w-[185px]">
            algun mensaje pasadoasddddddddddddddddd asdddddddddddddd asdddddddddddddddddd
          </span>
          <span class="ml-auto bg-primary text-white w-4 text-center rounded-full">
            3
          </span>
        </p>
      </div>
    </div> 
  </a>
</template>

<script setup>
const emit = defineEmits(["showChat"]);

const props = defineProps({
  chat:{
    type:Object,
    required:true,
  }
});
</script>

<style>

</style>