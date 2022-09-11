import { defineAsyncComponent, onMounted, computed, ref, inject } from "vue";

export const useDataTable = (data,elementsPerPage) => {

  //data que se va a mostrar en la tabla 
  const paginatedData = ref([]);
  //numero de paginas que se envian al componente pagination
  const pages = computed(() => Math.ceil(data.length / elementsPerPage));
  //pagina actual a mostrar por defecto es la 1 
  const actualPage = ref(1);

  const getDataPagination = (page) => {
      //asignamos el valor de la pagina recibida al valor actual manejado
      actualPage.value = page;
      //valor inicial va ser la pagina data * la cantidad de  elementos a mostrar - la cantidad de  elementos a mostrar
      let ini = (page * elementsPerPage) - elementsPerPage;
      //valor final va a ser la pagina dada *  la cantidad de  elementos a mostrar
      let fin = (page * elementsPerPage);
      //los valores a mostrar seran desde ini hasta fin
      paginatedData.value = data.slice(ini,fin);
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

  return { 
    paginatedData,
    pages,
    actualPage,
    getDataPagination,
    getPreviusPage,
    getNextPage,
  }
}