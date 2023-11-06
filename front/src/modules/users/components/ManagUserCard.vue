<script setup lang='ts'>
import userCard from '@/components/commons/userCard.vue';

const props = defineProps<{
    rol?:string
}>();
</script>

<template>
    <div class="grid grid-cols-4 capitalize"> 
        <div class="col-span-1 border ">
            <userCard :is_spanded="false" class="cursor-pointer w-fit m-auto"/>
        </div>
        <div class="col-span-1 border text-center">
            <p class="font-semibold ">
                maria claudia
            </p>
            <p class="text-sm opacity-80">
                tecnologia
            </p>
        </div>
        <div class="col-span-1 border">
            <p class="rounded-lg text-center w-fit px-2 text-sm m-auto mt-2" :class="[
                { 'bg-red-200 border border-red-400 text-red-600 font-medium': rol === 'admin' },
                { 'bg-blue-100 border border-blue-400 text-blue-600 font-medium': rol === 'tecnico' },
                { 'bg-slate-200 border border-slate-400 text-slate-600': rol === 'cliente' },
             ]">
                {{ rol }} 
            </p>
        </div>
        <div class="col-span-1 border">
            hola
        </div>
    </div>
</template>

<style scoped lang='scss'>

</style>