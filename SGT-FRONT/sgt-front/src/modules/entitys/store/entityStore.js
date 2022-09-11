import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getAllEntitys } from "../../../services/entityService";

export const useEntityStore = defineStore('entityStore', () => {
  /**********************************  STORE  **********************************/

  const entitys = ref([]);
  
  /**********************************  ACTION  **********************************/

  const setAllEntitys = async () => {
    const { status, data } = await getAllEntitys();
    
    if(status){
      entitys.value = data.data;

    }else return { status:false, data };
  }
  /**********************************  GETTERS  **********************************/
  
  const getAll = computed(() => entitys.value );

  return {
    entitys,
    setAllEntitys,
    getAll
  }
});
