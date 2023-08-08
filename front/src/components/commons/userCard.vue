<script setup lang='ts'>
    const props = defineProps<{
        is_spanded:boolean,
    }>();
    // const emits = defineEmits<{
    //     (event:'onChangeSize', value: string):void,
    // }>();
</script>

<template>
    <div class="flex items-center w-full"> 
        <!-- USER ICON-->
        <div class="rounded-full overflow-hidden flex items-center bg-secondary shadow-lg hover:opacity-70" :class="[
            { 'w-10' : is_spanded   },
            { 'h-10' : is_spanded   },
            { 'w-8'  : !is_spanded   },
            { 'h-8'  : !is_spanded   },

        ]">
            <img src="@/assets/imgs/userCardImg.jpg" alt="" class="object-cover flex m-auto rounded-full" :class="[
            { 'w-7' : is_spanded   },
            { 'h-7' : is_spanded   },
            { 'w-5'  : !is_spanded   },
            { 'h-5'  : !is_spanded   },

        ]">
        </div>
        <!-- USER NAME-->
        <div class="flex mx-auto max-w-[120px] w-[120px] truncate text-center" v-if="is_spanded">
            Emanuel abreu.
        </div>
        <!-- LOG OUT BUTTON-->
        <div class="w-6 h-6" v-if="is_spanded">
            <img src="@/assets/icons/logout.svg" alt="" class="text-primary hover:opacity-70">
        </div>
    </div>
</template>
<style scoped lang="scss">
    
</style>