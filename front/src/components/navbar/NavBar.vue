<script setup lang="ts">
</script>

<template>
     <nav class="flex">
        <ul class="flex">
            <li> 
                <router-link :to="{ name:'pending' }" v-slot="{ isActive }">
                    <span>link 1</span>
                </router-link> 
            </li>
            <li> 
                <router-link :to="{ name:'pending' }" v-slot="{ isActive }">
                    <span>link 1</span>
                </router-link> 
            </li>
            <li> 
                <router-link :to="{ name:'pending' }" v-slot="{ isActive }">
                    <span>link 1</span>
                </router-link> 
            </li>
        </ul>
        <!-- aditionals elements for navbar -->
        <slot name="extra-element"></slot>
    </nav>
</template>

<style scoped lang="scss">
    
</style>