import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getPositionsByEntity } from "../../../services/positionService";

export const usePositionStore = defineStore('positionStore', () => {
  /**********************************  STORE  **********************************/
  const positionsByEntity = ref([]);
  
  /**********************************  ACTIONS  **********************************/
  //recibe un parametro id que es el id de una entidad
  const setPositions = async (entityId) =>{
    const { status, data } = await getPositionsByEntity(entityId);
    if(status){
      positionsByEntity.value = data.data;

    }else{
      positionsByEntity.value = [];
      return { status:false, data };
    }
  }
  /**********************************  GETTERS  **********************************/
  const getpositionsByEntity= computed(() => positionsByEntity.value );
  return { 
    positionsByEntity,
    setPositions ,
    getpositionsByEntity
  }
});
