import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { 
  closedTickets, 
  PendingTickets, 
  takeTicket, 
  currenTicket, 
  returnTicket,
  PendingTicketsByUser,
  closeTicket,
  AceptedTicketsByTech
} from "../../../services/ticketService.js";
import { useMainStore } from "@/stores/mainStore.js";
import moment from "moment"

export const useTicketStore = defineStore('ticketStore', () => {
  /**********************************   STORE   **********************************/
  const mainStore = useMainStore(); 
  const activeTicket = ref({});
  const pendingTickets = ref([]);
  const pendingTicketsByUser = ref([]);
  const aceptedTicketsByTech = ref([]);
  const myTickets = ref([]);

  

  /**********************************  ACTIONS  **********************************/

  //guarda en el store los tickets por solventar
  const setPendingTickets = async () => {

    const { status, data } = await PendingTickets();
    
    if(status) pendingTickets.value = data.data;
    else{ 
      console.log(data);
      return { status:false, data };
    }
  };

  //guarda en el store los tickets solicitados por un det user
  const setPendingTicketsByUser = async () => {

    const { status, data } = await PendingTicketsByUser(mainStore.logedUser.id);
    
    if(status) pendingTicketsByUser.value = data.data;
    else return { status:false, data };
  };

  //guarda en el store los tickets aceptados por un det tech
  const setaceptedTicketsByTech = async () => {

    const { status, data } = await AceptedTicketsByTech(mainStore.logedUser.id);
    
    if(status) aceptedTicketsByTech.value = data.data;
    else return { status:false, data };
  };
  
  //permite a un usuario tomar un ticket pendiente
  const takePendingTicket = async (ticketId) =>{

    const { status, data } = await takeTicket(mainStore.logedUser.id,ticketId);
    if(status){
      pendingTickets.value = pendingTickets.value.filter((elem) => elem._id != ticketId);
      return { status, data };
    }else return { status, data};
  };

  //permite a un usuario devolver un ticket pendiente no cumplido
  const returnPendingTicket = async (ticketId) =>{
    activeTicket.value = {};
    const { status, data } = await returnTicket(ticketId); 
    if(status){
      activeTicket.value = {};
      return /*{ status, data };*/
    }else return { status, data};
  };

  // guarda en el store los tickets cerrados por un determinado user
  const setClosedTickets = async () => {
    const { status, data } = await closedTickets(mainStore.logedUser.id);
    if(status){
      myTickets.value = data.data;
      return { status, data };
    }else return { status, data};
  };

  //guarda en el store un ticket que esta pendiente por cerrarse.
  const setCurrentTicket = async () => {
    const { status, data } = await currenTicket(mainStore.logedUser.id);
    if(status){
      activeTicket.value = data.data;
      return { status, data };
    }else return { status, data};
  };

  // borra un ticket del store / db
  const closeOneTicket = async (ticketId) => {
    const { status, data } = await closeTicket(ticketId);
    if(status){
      pendingTicketsByUser.value = pendingTicketsByUser.value.filter((elem) => elem._id != ticketId);
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
        solicitante :ele.sendBy.name,
        fecha  :moment(ele.createdAt).format("Y-MM-D"),
        hora: moment(ele.createdAt).add(24, 'hours').format('HH:mm'),
        descripcion :ele.description,
        entidad:ele.sendBy.entity.name
      }
      return newElem;
    }
  ));

  const getPendingTicketsById = computed(() => 
    pendingTicketsByUser.value.map((ele) => {
      let newElem = {
        id          :ele._id,
        item        :ele.item,
        tipo        :ele.type,
        estado      :ele.status == 'pending' ? 'Pendiente' : 'En curso',
        solicitado  :moment(ele.createdAt).format("Y-MM-D"),
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
        fecha  :moment(ele.createdAt).format("Y-MM-D, h:mm a"),
      }
      return newElem;
    }
  ));

  const getCurrent = computed(() => {
    if(Object.entries(activeTicket.value).length !== 0){
      const formatedCurrent = {
        id          :activeTicket.value._id,
        item        :activeTicket.value.item,
        tipo        :activeTicket.value.type,
        estado      :activeTicket.value.status,
        solicitante :activeTicket.value.sendBy,
        fecha       :activeTicket.value.createdAt,
        Departamento:activeTicket.value.entity
      }
      return formatedCurrent
    }else return {}
  });

  const getAceptedTicketsByTech = computed(() => 
    aceptedTicketsByTech.value.map((ele) => {
      let newElem = {
        item        :ele.item,
        tipo        :ele.type,
        estado      :'Pendiente',
        solicitante :ele.sendBy.name,
        fecha  :moment(ele.createdAt).format("Y-MM-D"),
        hora: moment(ele.createdAt).add(24, 'hours').format('HH:mm'),
        descripcion :ele.description,
        entidad:ele.sendBy.entity.name
      }
    return newElem;
  }
));

  return {
    pendingTickets,
    myTickets,
    activeTicket,
    pendingTicketsByUser,
    aceptedTicketsByTech,
    //actions
    takePendingTicket,
    returnPendingTicket,
    setPendingTickets,
    setClosedTickets,
    setCurrentTicket,
    setaceptedTicketsByTech,
    setPendingTicketsByUser,
    closeOneTicket,
    //getters
    getPendingTickets,
    getPendingTicketsById,
    getMyTickets,
    getCurrent,
    getAceptedTicketsByTech
  }
});
