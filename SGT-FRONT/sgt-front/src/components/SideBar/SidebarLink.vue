<template>
  <router-link 
    :to="rout"
    v-slot="{ /*href,*/isActive }"
    class="relative mb-5 p-1">
    <div :class="isActive ? 'is-active' : 'in-active' ">
        <div class="md:ml-5 ml-8 flex">
            <div class="mr-3">
              <font-awesome-icon :icon="link.icon" class="ml-2">
              </font-awesome-icon>
            </div>
            <div class="text-xm">
                {{ link.name }}
            </div>
        </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  link:{
    type:Object,
    required:true,
  },
});

const rout = computed(() =>  { return { name:props.link.to } }) ;

</script>


<style lang="css" scoped>
@media (min-width: 768px) {
    .is-active::after{
            content: "";
            width: 12px;
            height: 100%;
            top: 0;
            bottom: 0;
            background-color: #ffff;
            position: absolute;
            left: 0px;
            border-radius: 0px 7px 7px 0px;
            transition: ease-in;
        
    }
}
.in-active::hover{
        opacity: 1;
}
</style>