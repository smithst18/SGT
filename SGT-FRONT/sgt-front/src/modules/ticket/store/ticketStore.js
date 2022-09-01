import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { closedTickets, PendingTickets, takeTicket } from "../../../services/ticketService.js";
import { useMainStore } from "@/stores/mainStore.js";


export const useTicketStore = defineStore('ticketStore', () => {
  /**********************************   STORE   **********************************/
  const currentTicket = ref({});
  const pendingTickets = ref([]);
  const myTickets = ref([]);
  const mainStore = useMainStore(); 

  

  /**********************************  ACTIONS  **********************************/
  const setPendingTickets = async () => {

    const { status, data } = await PendingTickets();
    
    if(status) pendingTickets.value = data.data;
    else{ 
      console.log(data);
      return { status:false, data };
    }
  };
  

  const takePendingTicket = async (ticketId) =>{

    const { status, data } = await takeTicket(mainStore.logedUser.id,ticketId);
    if(status){
      pendingTickets.value = pendingTickets.value.filter((elem) => elem._id != ticketId);
      return { status, data };
    }else return { status, data};
  };

  const setClosedTicket = async () => {
    const { status, data } = await closedTickets(mainStore.logedUser.id);
    if(status){
      myTickets.value = data.data;
      return { status, data };
    }else return { status, data};
  };

  const setCurrentTicket = async () => {
    const { status, data } = await closedTickets(mainStore.logedUser.id);
    if(status){
      myTickets.value = data.data;
      return { status, data };
    }else return { status, data};
  };

  /**********************************  GETTERS  **********************************/
  const getPendingTickets = computed(() => 
    pendingTickets.value.map((ele) => {
      let newElem = {
        id          :ele._id,
        item        :ele.item,
        tipo        :ele.type,
        estado      :'Pendiente',
        solicitante :ele.sendBy.nickName,
        solicitado  :ele.createdAt,
        descripcion :ele.description,
      }
      return newElem;
    }
  ));

  const getMyTickets = computed(() => 
  myTickets.value.map((ele) => {
    let newElem = {
      item        :ele.item,
      tipo        :ele.type,
      estado      :'Cerrado',
      solicitante :ele.sendBy.nickName,
      fecha  :ele.createdAt,//se debe parcear con momentjs
      // descripcion :ele.description,
    }
    return newElem;
  }
));

  return {
    pendingTickets,
    myTickets,
    currentTicket,
    //actions
    setPendingTickets,
    takePendingTicket,
    setClosedTicket,
    //getters
    getPendingTickets,
    getMyTickets
  }
});
