<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const NavbarItem = defineAsyncComponent(() => import('@/components/navbar/NavbarItem.vue'));

</script>

<template>
     <nav class="flex items-center">
        <ul class="flex">
            <li class=""> 
                <NavbarItem title="No asignados" :notifications="3" rout-name="unAssigned" type="unAssigned"/>
            </li>
            <li class=""> 
                <NavbarItem title="Asignados" :notifications="5" rout-name="assigned" type="assigned"/>
            </li>
        </ul>
        <!-- aditionals elements for navbar -->
        <div class="ml-auto">
            <slot name="extra-element"></slot>
        </div>
    </nav>
</template>

<style scoped lang="scss"> 

</style>