<template>
  <router-link 
    :to="{ name:'activeChat',params: { name:props.chat.nickName } }"
    v-slot="{ /*href,*/ isActive }"
    >
    <div 
      :class="isActive ? 'is-active' : 'in-active' "
      class="grid grid-cols-4 pointer hover:bg-slate-100 w-full h-full border-b-2 shadow-sm" 
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
            <span class="text-xs ml-auto text-slate-500" v-if="props.chat.lastMsg"  >
              {{ formatedDate(props.chat.lastMsg.time) }}
            </span>
          </p>
          <p class="text-xs flex">
            <span v-if="props.chat.lastMsg" 
              class="capitalize text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis max-w-[80%]">
              {{ props.chat.lastMsg.text }}
            </span>
            <span v-if="props.chat.unreadMsg && props.chat.unreadMsg >=1" 
              class="ml-auto bg-primary text-white w-4 text-center rounded-full">
              {{ props.chat.unreadMsg }}
            </span>
          </p>
        </div>
      </div> 
    </div>
  </router-link>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import moment from "moment";

const emit = defineEmits(["showChat"]);

const props = defineProps({
  chat:{
    type:Object,
    required:true,
  }
});
const formatedDate = computed(() => (fecha) => moment(fecha,'MMMM Do YYYY, h:mm a').format('h:mm a'));
</script>

<style scoped>
.is-active{
  @apply bg-slate-100
}
.in-active{
  @apply bg-white
}
</style>