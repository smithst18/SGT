<template>
  <router-link 
    :to="rout"
    v-slot="{ /*href,*/isActive }"
    class="relative py-3 mb-3">
    <div :class="isActive ? 'is-active' : 'in-active' ">
        <div class="lg:ml-8 md:ml-6 ml-8 flex">
            <div class="mr-3">
                <i :class="props.link.icon"></i> 
            </div>
            <div class="text-sm">
                {{ props.link.name }}
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
            max-height: 32px;
            min-height: 32px;
            top: 0;
            bottom: 0;
            background-color: #ffff;
            position: absolute;
            left: 0px;
            border-radius: 0px 30px 30px 0px;
            transition: ease-in;
        
    }
}
.in-active::hover{
        opacity: 1;
}
</style>