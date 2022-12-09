import { defineStore } from "pinia";
import { computed, ref } from "vue";
//cookies package
import { useCookies } from "vue3-cookies";
//import service for user api consume
import { userLogin, getUsersList } from "../services/userService"; 

// const localStorage = window.localStorage; 
const { cookies } = useCookies();

export const useMainStore = defineStore('main', () => {

  /**********************************  STORE  **********************************/
  const logedUser = ref({});
  const isLoged = ref(false);
  const requestLoading = ref(false);
  const chatClients = ref([]);

  /**********************************  ACTIONS  **********************************/
  
  const logIn = async (user) => {

    const { status, data } = await userLogin(user);
    //si me llega el token 
    if(status && data){
      //guardar el token en una cookie para su posterior uso
      if(data.token) cookies.set('token',data.token);
      //recibir el payload
      const payload = await userLogin(user);
      //set user in cookies
      cookies.set('user_loged',payload.data.user);
      //setear el usuario en el store
      logedUser.value = payload.data.user;
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
  
  const setChatClients = async () =>{
    const { status, data } = await getUsersList();
    if(status) chatClients.value = data.data;
    else return { status:false, data };
  };

  /**********************************  GETTERS  **********************************/
  
  const getRol = computed(() =>{
    if(logedUser.value) return logedUser.value.rol;
  });

  const getRequestStatus = computed(() =>{
    return requestLoading.value;
  });

  const getSearchedClient = computed(() => (searchString) =>{
    if(searchString.length >= 3) return chatClients.value
    .filter((elem) => elem.nickName.includes(searchString))//;elem.nickName == searchString);
    else false
  });


  //actions to call
  setUser();
  return { 
    logedUser, 
    isLoged,
    requestLoading,
    chatClients,
    //actions
    logIn, 
    logOut,
    requestToTrue:() => requestLoading.value = true,
    requestToFalse:() => requestLoading.value = false,
    setChatClients,
    //getters
    getRol,
    getRequestStatus,
    getSearchedClient
  }
});
