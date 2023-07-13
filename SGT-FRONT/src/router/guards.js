import { storeToRefs } from "pinia";
import  { useMainStore } from "../stores/mainStore";


export const isAuthGuard = (to, from, next) => {
  const store = useMainStore();
  
  if(to.name !== "login" && !store.isLoged ) next({ name:'login'});
  else next();
}

export const rolGuard = (to, from, next) => {
  const store = useMainStore();

  if( to.meta.rolsAllow.find( elem => elem === store.logedUser.rol) ) next();
  else {
    if(store.logedUser.rol === 'tech') next({ name:'techHome'});
    if(store.logedUser.rol === 'user') next({ name:'userHome'});
    if(store.logedUser.rol === 'admin') next({ name:'adminHome'});
  }
}