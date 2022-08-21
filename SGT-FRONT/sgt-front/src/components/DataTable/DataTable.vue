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
                  <td 
                    v-if="showAction"
                    ></td>
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
  import { defineAsyncComponent, onMounted, computed, ref, inject } from "vue";
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
  //propiedad injectada a DataTable component que permite a;adir un botton de accion 
  const showAction = inject('showActions');

  //data que se va a mostrar en la tabla 
  const paginatedData = ref([]);
  //numero de paginas que se envian al componente pagination
  const pages = computed(() => Math.ceil(props.data.length / props.elementsPerPage));
  //pagina actual a mostrar por defecto es la 1 
  const actualPage = ref(1);

  const getDataPagination = (page) => {
      //asignamos el valor de la pagina recibida al valor actual manejado
      actualPage.value = page;
      //valor inicial va ser la pagina data * la cantidad de  elementos a mostrar - la cantidad de  elementos a mostrar
      let ini = (page * props.elementsPerPage) - props.elementsPerPage;
      //valor final va a ser la pagina dada *  la cantidad de  elementos a mostrar
      let fin = (page * props.elementsPerPage);
      //los valores a mostrar seran desde ini hasta fin
      paginatedData.value = props.data.slice(ini,fin);
  };

  const getPreviusPage = () => {
    if(actualPage.value > 1){
      actualPage.value -= 1;
    }
    getDataPagination(actualPage.value);
  };
  
  const getNextPage = () => {
    if(actualPage.value < pages.value){
      actualPage.value += 1;
    }
    getDataPagination(actualPage.value);
  };

  const paginationProps = {
    pages:pages.value,
    results:props.data.length,
    elementsPerPage:props.elementsPerPage,
  };
  
  onMounted(() => getDataPagination(actualPage.value) );
</script>

<style scoped>
</style>