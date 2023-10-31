<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useModal } from "@/composables/useModal";
    const BaseButton = defineAsyncComponent(() => import('@/components/commons/MainButton.vue'));
    const NavbarComponent = defineAsyncComponent(() => import('@/components/navbar/NavBar.vue'));
    const SearchingBar = defineAsyncComponent(() => import('@/components/commons/SearchBar.vue'));
    const TicketModal = defineAsyncComponent(() => import('@/components/commons/GenericModal.vue'));
    const router = useRouter();
    const { showModal, showModalAction } = useModal(true);
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
                <h1 class="text-2xl font-bold">Tickets</h1>
                <BaseButton  class="ml-auto" title="Nuevo Ticket" :fullSize="false" @click="showModalAction"/>
            </div>
        </div>
        <!--BOX WITH TICKETS  AND STUFF-->
        <div class="w-full h-[85%] pl-2">
            <!-- navigation bar -->
            <NavbarComponent class="h-[10%] pl-5 border-b-2">
                <template v-slot:extra-element>
                    <SearchingBar/>
                </template>
            </NavbarComponent>
            <!-- body -->
            <div class="h-[90%] w-full max-w-max">
                <router-view/>
            </div>
        </div>
        <teleport to='body'>
            <TicketModal :show-modal="showModal" @close-modal="showModalAction">
                <template #header>
                    <div>
                        hola
                    </div>
                </template>
                <template #body>
                    <div>
                        adios assdaasdasdasd
                    </div>
                </template>
                <template #footer>
                    <div>
                        hasta luego asdasasdasdasd
                    </div>
                </template>
            </TicketModal>
        </teleport>
    </div>
</template>

<style scoped lang="scss">
</style>