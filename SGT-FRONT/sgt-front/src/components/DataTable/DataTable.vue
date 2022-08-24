<template>
    <div class="h-full">
      <!-- volver la tabla reactiva los th y los td -->
      <div class="overflow-y-auto h-[82%]">
        <table class="w-full border border-gray-200">
            <thead>
                <tr>
                    <th v-for="thead in props.titles" :key="thead"> {{ thead }} </th>
                </tr>
            </thead>
            <tbody class="text-center w-full">
                <tr v-for="tbData in paginatedData" :key="tbData">
                  <td v-for="elem in tbData" :key="elem"> {{ elem }} </td>
                </tr>
            </tbody>
        </table>
      </div>
      <!-- pagination component -->
      <Pagination 
        class=" border border-gray-200 mt-auto"
        v-bind="paginationProps"
        @dataPagination="getDataPagination"
        @prevPage="getPreviusPage"
        @nextPage="getNextPage"
        v-if="showPagination"
        />
    </div>
</template>

<script setup>
  import { defineAsyncComponent, onMounted } from "vue";
  import { useDataTable } from "@/composables/userDataTable.js"

  const Pagination = defineAsyncComponent(() => import('@/components/DataTable/PaginationBar.vue'));

  const props = defineProps({
    titles:{
      require:true,
      type:Array
    },
    data:{
      require:true,
      type:Array
    },
    showPagination:{
      require:true,
      type:Boolean,
    },
    elementsPerPage:{
      type:Number,
      required:true,
    },
  });

  const {
    paginatedData,
    pages,
    actualPage,
    getDataPagination,
    getPreviusPage,
    getNextPage,

  } = useDataTable(props.data, props.elementsPerPage);

  const paginationProps = {
    pages:pages.value,
    results:props.data.length,
    elementsPerPage:props.elementsPerPage,
  };
  
  onMounted(() => getDataPagination(actualPage.value) );
</script>

<style scoped>
</style>