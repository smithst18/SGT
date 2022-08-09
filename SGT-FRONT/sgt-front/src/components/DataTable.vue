<template>
    <!-- volver la tabla reactiva los th y los td -->
    <table class="w-full table-fixed">
        <thead class="sticky top-0">
            <tr>
                <th v-for="thead in props.theadTitles" :key="thead"> {{ thead }}</th>
            </tr>
        </thead>
        <tbody class="text-center w-full">
            <tr v-for="tbData in props.tbodyData" :key="tbData">
                <td v-for="elem in tbData" :key="elem"> {{ elem }} </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
// imports
import { onMounted } from "vue";
// props
const props = defineProps({
  theadTitles:{
    require:true,
    type:Array
  },
  tbodyData:{
    require:true,
    type:Array
  }
});

</script>

<style scoped>
</style>