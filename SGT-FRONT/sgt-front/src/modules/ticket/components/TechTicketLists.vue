<template>
    <div class="p-8 h-full border-red-500">
        <h3 class="text-primary text-lg mb-6">{{ title }}</h3>
        <div class="border border-cyan-200 p-2 h-[90%]">
            <!-- pasarle la data de los ticket a la tabla  -->
            <div class="h-full">
                <TicketTable v-bind="tableOptions"/>
            </div>
        </div>
    </div>  
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable/DataTable.vue'));

    const props = defineProps({
        title:{
            type:String,
            required:true,            
        },
        titles:{
            type:Array,
            required:true,
        },
        data:{
            type:Array,
            required:true,
        }

    })
    const tableOptions = {
        titles:props.titles,
        data:props.data,
        showPagination: true,
        elementsPerPage:10
    }
</script>

<style scoped>

</style>