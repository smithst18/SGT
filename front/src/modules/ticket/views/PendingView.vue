<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const BaseButton = defineAsyncComponent(() => import('@/components/commons/MainButton.vue'));
const navbar = defineAsyncComponent(() => import('@/components/navbar/NavBar.vue'));
    const showdata = (event:string) =>{
        console.log(event)
    }
</script>

<template>
    <div class="w-full h-full ">
        <!-- TITTLE AND BUTTON FOR CREATE NEW TICKETS -->
        <div class="border border-blue-500 w-full h-[15%]">
            <div class="flex items-center w-full h-full px-5 border">
                <h1 class="text-2xl border">Tickets Pendientes y Cerrados</h1>
                <BaseButton  class="ml-auto" title="Nuevo Ticket" :fullSize="false"/>
            </div>
        </div>
        <!--BOX WITH TICKETS  AND STUFF-->
        <div class="border border-red-500 w-full h-[85%] px-5">
            <!-- navigation bar -->
            <navbar>
                <template v-slot:extra-element>
                    aqui va los demas widgets
                </template>
            </navbar>
            <!-- body -->
            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>