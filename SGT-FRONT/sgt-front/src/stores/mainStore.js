import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { api } from "@/api/api.js";

export const useMainStore = defineStore('main', () => {
  //store
  const logedUser = ref(null);
  
  //actions
  const logIn = async (user) => {
    if(logedUser) 
    try{
      const { data } = await api.post('user/login',user);
      console.log(data);
      return true
    }catch(e){
      return false;
    }
  };

  //getters

  return { logedUser, logIn}
});
