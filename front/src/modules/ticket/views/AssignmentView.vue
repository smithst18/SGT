<script setup lang='ts'>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const TicketInfoCard = defineAsyncComponent(() => import('@/modules/ticket/components/TicketInfCard.vue'));


</script>

<template>
    <div class="w-full h-full border border-purple-800 overflow-y-auto"> 
        <TicketInfoCard/>
        <TicketInfoCard/>
        <TicketInfoCard/>
        <TicketInfoCard/>
    </div>
</template>

<style scoped lang='scss'>

</style>