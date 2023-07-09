import { defineStore } from "pinia";
import { computed, ref } from "vue";
//cookies package
import { useCookies } from "vue3-cookies";
//import service for user api consume
import { userLogin } from "../services/userService"; 

// const localStorage = window.localStorage; 
const { cookies } = useCookies();

export const useMainStore = defineStore('main', () => {

  /**********************************  STORE  **********************************/
  const logedUser = ref({});
  const isLoged = ref(false);
  const requestLoading = ref(false);

  //survey state

  const userSurvey = ref({});


  //CHAT STATE
  const chatClients = ref([]);
  const currentChat = ref(undefined);

  /**********************************  ACTIONS  **********************************/
  
  const logIn = async (user) => {

    const { status, data } = await userLogin(user);
    //si me llega el token 
    if(status && data){
      //guardar el token en una cookie para su posterior uso
      if(data.token) cookies.set('token',data.token);
      //recibir el payload
      const payload = await userLogin(user);


      cookies.set('user_loged',payload.data.user);
        //setear el usuario en el store
      logedUser.value= payload.data.user;
      isLoged.value = true;
      return { status: true, data: payload.data.user };
    }
    //si viene un error retornar status false y devolver la data del error
    else if(!status) return { status: false, data };
    //en caso de estar ya logeado token guardado etc
    else return { status: true, data:'Ya estas logeado' };
  };

  const setUser = () => {
    logedUser.value = cookies.get('user_loged');
    if(logedUser.value !=  null) isLoged.value = true;
  };

  const logOut = async (user) => {
    // reiniciar el stado del store
    logedUser.value = {};
    isLoged.value = false;
    // borrar la cookie 
    cookies.remove('token');
    cookies.remove('user_loged');
  };

  //SURVEY ACTIONS
  const setSurvey = (data) => {
    if(data) userSurvey.value = data;
    else return { status:false, data:'Invalidad Data' };
    console.log('se ha setiado la data del survey');
  }
  
  //CHAT ACTIONS
  const setChatClients = (data) =>{
    if(data) chatClients.value = data;
    else return { status:false, data:'an error ocurred on socket' };
  };

  const setCurrentChat = (data) =>{
    if(data){
      currentChat.value = data;
    }
  };

  const addMsgToCurrentChat = (data) => {
    if(data){
      currentChat.value.messages.push(data);
      return true;
    }
  }

  const incrementMsgCount = (clientId) => {
    const chatPosition = chatClients.value.findIndex((elm) => elm._id == clientId)
    if(chatPosition == -1) console.log('no encontrado');

    if(chatClients.value[chatPosition] != -1 && chatClients.value[chatPosition]._id == clientId ) {
      chatClients.value[chatPosition].unreadMsg ++;
    }
  }
  const resetMsgCount = (clientId) =>{
    const chatPosition = chatClients.value.findIndex((elm) => elm._id == clientId)
    if(chatPosition == -1) console.log('no encontrado');

    if(chatClients.value[chatPosition] != -1 && chatClients.value[chatPosition]._id == clientId ) {
      chatClients.value[chatPosition].unreadMsg = 0;
    }
  }
  /**********************************  GETTERS  **********************************/
  
  const getRol = computed(() =>{
    if(logedUser.value) return logedUser.value.rol;
  });
  const getClients = computed (() => {
    const sorted = chatClients.value.filter((elm) => elm.lastMsg).sort((a,b) => {
      if(a.unreadMsg > b.unreadMsg) return -1

      if(a.unreadMsg < b.unreadMsg)  return 1

      return 0
    });
    return sorted
  });
  const getRequestStatus = computed(() =>{
    return requestLoading.value;
  });

  const getSearchedClient = computed(() => (searchString) =>{
    if(searchString.length >= 3) return chatClients.value
    .filter(
      (elem) => 
        elem.nickName.toLowerCase().includes( searchString.toLowerCase() )
        ||
        elem.name.toLowerCase().includes( searchString.toLowerCase() )
    ).filter(
      (elem) => elem._id !== logedUser.value._id
    )
    else false
  });
  //CHAT GETTERS
  const getCurrentChat = computed(() => {
    if(currentChat.value) return currentChat.value 
  });
  //actions to call
  setUser();
  return { 
    logedUser, 
    isLoged,
    userSurvey,
    requestLoading,
    chatClients,
    currentChat,
    //actions
    logIn, 
    logOut,
    setSurvey,
    requestToTrue:() => requestLoading.value = true,
    requestToFalse:() => requestLoading.value = false,
    setChatClients,
    setCurrentChat,
    addMsgToCurrentChat,
    incrementMsgCount,
    resetMsgCount,
    //getters
    getLogedUser: computed(() => logedUser.value), 
    getRol,
    getRequestStatus,
    getClients,
    getSearchedClient,
    getCurrentChat
  }
});
