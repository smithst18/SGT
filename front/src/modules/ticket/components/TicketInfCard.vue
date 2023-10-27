<script setup lang='ts'>
import type { TicketInterface } from "@/interfaces/ticketInterfaces";
const props = defineProps<{
    ticket: TicketInterface,
}>();
</script>

<template>
    <div class="p-5 rounded-md shadow-md my-4 h-[185px] w-full grid grid-rows-5 grid-cols-1"> 
        <div class="flex items-center mb-5 row-span-1">
            <h4 class="text-base font-medium">{{ ticket.title }}.</h4>
            <p class="ml-auto font-medium">{{ ticket.date }}</p>
        </div>
        <div class="text-sm font-light mb-5 row-span-3">
            <p class="overflow-y-auto break-words h-full">
                {{ ticket.description }}
            </p>
        </div>
        <div class="flex text-xs mt-auto font-medium row-span-1">
            <div class="ticket_tag"
            :class="[
                { 'bg-red-500 text-white': ticket.status === 'urgente' },
                { 'bg-yellow-500': ticket.status === 'abierto' },
                { 'bg-blue-500 text-white': ticket.status === 'cerrado' },
                { 'bg-orange-500 text-white': ticket.status === 'espera' }
             ]">{{ ticket.status }}</div>
            <div class="ticket_tag bg-slate-500">#{{ ticket.id }}</div>
            <div class="ticket_tag bg-slate-300">#{{ ticket.requester }}</div>
            <div class="ticket_tag bg-slate-300">#{{ ticket.location  }}</div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.ticket_tag{
    @apply rounded-full mr-3 px-3 py-1
}
</style>