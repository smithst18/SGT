<template>
    <div class="h-full">
      <div class="block w-full overflow-x-auto overflow-y-auto h-[82%]">
        <table class="items-center bg-transparent w-full border-separate">
          <thead>
            <tr>
              <th v-for="thead in props.titles" :key="thead"> {{ thead }} </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="tbData in paginatedData" :key="tbData">
              <td v-for="elem in tbData" :key="elem"> {{ elem }} </td>
            </tr>
          </tbody>

        </table>
        <div class="text-md text-primary text-center mt-10" v-if="!data">
          No tienes ningun soporte aun ..
        </div>
      </div>
      <!-- pagination component -->
      <Pagination 
        class="shadow-md mt-auto"
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
  import { useDataTable } from "@/composables/useDataTable.js"

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

  } = useDataTable( props.data, props.elementsPerPage);

  const paginationProps = {
    pages:pages.value,
    results:props.data.length,
    elementsPerPage:props.elementsPerPage,
  };
  
  onMounted(() => getDataPagination(actualPage.value) );
</script>

<style scoped>
  thead > tr > th{
    @apply px-6 bg-gray-50 text-primary align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center sticky top-0
  }
  /* tbody > tr > th{
    @apply border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-red-700 
  } */
  tbody > tr > td{
    @apply border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center
  }
</style>