<script setup lang='ts'>
    const props = defineProps<{
        porcentValue:number
        percentage: string | null,
        title:string,
        srcImg:string
    }>();
</script>
    
<template>
    <div class="flex items-center justify-center w-[30%] h-4/5 px-[5%] bg-primary-light opacity-80 rounded-lg shadow-md">
        <!-- Texto mas data-->
        <div class="">
            <p class="text-3xl text-center">{{ props.porcentValue }} {{ props.percentage }}</p>
            <p class="text-third text-base">{{ props.title }}</p>
        </div>
        <!-- icon -->
        <div class="bg-primary opacity-30 flex ml-auto rounded-full w-10 h-10">
            <img :src="props.srcImg" alt="" class="text-primary w-6 h-6 flex m-auto">
        </div>
    </div>      
</template>
    
<style>
    
</style>