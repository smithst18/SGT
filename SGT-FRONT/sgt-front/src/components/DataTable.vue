<template>
    <div class="h-full">
      <!-- volver la tabla reactiva los th y los td -->
      <div class="overflow-y-auto h-[82%]">
        <table class="w-full border border-gray-200">
            <thead>
                <tr>
                    <th v-for="thead in props.theadTitles" :key="thead"> {{ thead }}</th>
                </tr>
            </thead>
            <tbody class="text-center w-full">
                <tr v-for="tbData in props.dataBody" :key="tbData">
                    <td v-for="elem in tbData" :key="elem"> {{ elem }} </td>
                </tr>
            </tbody>
        </table>
      </div>
      <!-- pagination component -->
      <Pagination 
        class=" border border-gray-200 mt-auto"
        :pages="pages" 
        :total-pages="dataBody.length"
        @miEventoChild="mifuncionEnElPadre"
        v-if="showPagination"
        />
    </div>
</template>

<script setup>
  // imports
  import { computed, defineAsyncComponent, onMounted, ref } from "vue";
  const Pagination = defineAsyncComponent(() => import('@/components/PaginationBar.vue'));
  // props
  const props = defineProps({
    theadTitles:{
      require:true,
      type:Array
    },
    dataBody:{
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
    }
  });

  const paginatedData = ref([]);

  const pages = computed(() => Math.ceil(props.dataBody.length / props.elementsPerPage));

  const numPage = ref(1);

  const getDataPagination = (page) => {
    console.log(page,'cantidad de paginas')
    let ini = (page * props.elementsPerPage) - props.elementsPerPage;
    let fin = (page * props.elementsPerPage);
    console.log(ini,fin,'valores inciiales');
    for (let index = ini;index < fin ; index ++){
        paginatedData.value.push(props.dataBody[index]);
    }
  };
  const mifuncionEnElPadre = (value) =>{
    console.log(value)
  }
  onMounted(() =>{ getDataPagination(numPage.value) });

</script>

<style scoped>
</style>