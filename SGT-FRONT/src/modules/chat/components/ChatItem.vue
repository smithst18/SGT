<template>
  <div class="grid grid-cols-4 pointer hover:bg-slate-100 w-full h-full border-b-2" 
  @click="emit('showChat',props.chat._id)">
    <div class="col-span-1 flex">
      <font-awesome-icon :icon="['fa','user']" class="text-primary m-auto"/>
    </div>
    <div class="col-span-3 flex">
      <p class="text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis my-auto mr-4">
        <span class="text-slate-900 block">
          {{props.chat.name}}
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique est impedit autem. Illum asperiores natus quae tenetur possimus, cumque debitis praesentium accusamus ut eos quibusdam perferendis nostrum consectetur fugit?
      </p>
    </div> 
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
const emit = defineEmits(["showChat"]);

const props = defineProps({
  chat:{
    type:Object,
    required:true,
  }
});

onMounted(() => {
  console.log(props.chat)
});
</script>

<style>

</style>