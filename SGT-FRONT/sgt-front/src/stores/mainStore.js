import { defineStore } from "pinia";
import { computed, ref } from "vue";
//cookies package
import { useCookies } from "vue3-cookies";
//import service for user api consume
import { userLogin } from "../services/userService"; 

// const localStorage = window.localStorage; 
const { cookies } = useCookies();

export const useMainStore = defineStore('main', () => {
  //store
  const logedUser = ref({});
  
  //actions
  const logIn = async (user) => {

    const { status, data } = await userLogin(user);
    //si me llega el token 
    if(status && data.token){
      //guardar el token en una cookie para su posterior uso
      cookies.set('token',data.token);
      //recibir el payload
      const payload = await userLogin(user);
      //setear el usuario en el store
      logedUser.value = payload.data.user;
      return payload;
    }
    //si viene un error retornar status false y devolver la data del error
    else if(!status) return { status: false, data };
    //en caso de estar ya logeado token guardado etc
    else return { status: false, data:'Ya estas logeado' };
  };

  //getters

  return { logedUser, logIn}
});
