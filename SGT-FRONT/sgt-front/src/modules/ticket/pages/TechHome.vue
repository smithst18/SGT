<template>
    <div class="w-full h-full border border-cyan-900 grid grid-cols-1 grid-rows-4 gap-y-5">
        <div class="border border-rose-900 rounded-lg">
            <CurrentTicket />
        </div>
        <div class="border border-rose-900 row-span-3 rounded-lg">
            <MyTickets />
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const CurrentTicket = defineAsyncComponent(() => import('../components/DetailedTicker.vue'));
const MyTickets = defineAsyncComponent(() => import('../components/PendingTickets.vue'));
</script>

<style scoped>

</style>