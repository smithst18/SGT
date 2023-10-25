<script setup lang="ts">
</script>

<template>
     <nav class="flex">
        <ul class="flex">
            <li class="active"> 
                <router-link :to="{ name:'pending' }" v-slot="{ isActive }">
                    <div class="flex">
                        <div>
                            link 1
                        </div>
                        <div class="relative">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-red-600 bg-opacity-70 rounded-full"></div>
                            <div class="w-1 h-3 left-[6px] top-[4px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">4</div>
                        </div>
                    </div>
                </router-link> 
            </li>
            <li class="unactive"> 
                <router-link :to="{ name:'pending' }" v-slot="{ isActive }">
                    <div class="flex">
                        <div>
                            link 1
                        </div>
                        <div class="relative">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-red-600 bg-opacity-70 rounded-full"></div>
                            <div class="w-1 h-3 left-[6px] top-[4px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">4</div>
                        </div>
                    </div>
                </router-link> 
            </li>
           
        </ul>
        <!-- aditionals elements for navbar -->
        <div class="ml-5">
            <slot name="extra-element"></slot>
        </div>
    </nav>
</template>

<style scoped lang="scss"> 
    .active {
        @apply ml-5 underline underline-offset-4 decoration-solid decoration-2 decoration-primary-light text-base border
    } 
    .unactive {
        @apply pl-5 text-base opacity-75
    }
    .box-notification{
        @apply bg-red-500 rounded-full text-xs
    }

</style>