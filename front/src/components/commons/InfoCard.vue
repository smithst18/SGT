<script setup lang='ts'>
    const props = defineProps<{
        porcentValue:number
        percentage: string | null,
        title:string,
        icon:string
    }>();
</script>
    
<template>
    <div class="flex items-center justify-center w-[30%] h-4/5 px-[5%] bg-primary-light bg-opacity-40 rounded-lg shadow-md">
        <!-- Texto mas data-->
        <div class="">
            <p class="text-3xl text-center">{{ props.porcentValue }} {{ props.percentage }}</p>
            <p class="text-third text-base">{{ props.title }}</p>
        </div>
        <!-- icon -->
        <div class="bg-primary-light bg-opacity-30 flex ml-auto rounded-full w-14 h-14">
            <span class="material-symbols-outlined text-primary font-bold w-6 h-6 flex m-auto">
                {{ props.icon }}
            </span>
        </div>
    </div>      
</template>
    
<style>
    
</style>