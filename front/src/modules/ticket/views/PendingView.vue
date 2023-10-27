<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
    const BaseButton = defineAsyncComponent(() => import('@/components/commons/MainButton.vue'));
    const NavbarComponent = defineAsyncComponent(() => import('@/components/navbar/NavBar.vue'));
    const SearchingBar = defineAsyncComponent(() => import('@/components/commons/SearchBar.vue'));

    const router = useRouter();

    onMounted(() => {
        // a tener en cuenta de esta manera no tenemos los params en tiempo real IMPORTANTE
        router.push({ name: 'unAssigned', params: { type: 'unAssigned' } });
    });
</script>

<template>
    <div class="w-full h-full ">
        <!-- TITTLE AND BUTTON FOR CREATE NEW TICKETS -->
        <div class="w-full h-[15%]">
            <div class="flex items-center w-full h-full px-5">
                <h1 class="text-2xl">Tickets Pendientes y Cerrados</h1>
                <BaseButton  class="ml-auto" title="Nuevo Ticket" :fullSize="false"/>
            </div>
        </div>
        <!--BOX WITH TICKETS  AND STUFF-->
        <div class="w-full h-[85%] pl-2">
            <!-- navigation bar -->
            <NavbarComponent class="h-[10%] pl-5 shadow-md">
                <template v-slot:extra-element>
                    <SearchingBar/>
                </template>
            </NavbarComponent>
            <!-- body -->
            <div class="h-[90%] w-full max-w-max">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>