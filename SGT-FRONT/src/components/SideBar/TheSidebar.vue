<template>
  <nav class="md:flex md:flex-col bg-primary text-secondary text-xs md:w-1/5 md:auto shadow-lg md:rounded-lg sticky  top-0">
    <!-- toggle button  + logo -->
    <div class="lg:px-10 md:py-10 md:block p-5 flex items-center">
      
      <img src="@/assets/icons/logo.svg" alt="central +" class="pointer">
      <div class="mx-auto">
        <!-- @click="changeIcon()"  va en el icono-->
        <!-- <i :class="toggleIcon"></i> -->
      </div>
    </div>
    <!-- links -->
    <div class="md:mb-auto md:mt-16 md:z-auto md:static md:opacity-100 md:pl-0 pl-7  absolute bg-primary w-full left-0 opacity-0 top-[-400px] transition-all ease-out duration-700 md:transition-none" id="collapse"
      v-if="userLinks">
      <SidebarLinkVue v-for="link in links" :key="link.name" :link="link" class="block"/>
    </div>
    <!-- logOut button -->
    <a class="md:mb-10 pointer hidden md:block opacity-50 hover:opacity-100 text-center"
      @click="clsSession">
      <p class="text-xm">
        Cerrar Sesion 
        <font-awesome-icon :icon="['fa','arrow-right-from-bracket']" class="ml-2">
        </font-awesome-icon>
      </p>
    </a>
    <!-- minicard -->
    <!-- <div class="p-3 hidden lg:block">
      <div class="border flex items-center bg-secondary rounded-lg p-2 ">
        <img src="https://github.com/mdo.png" class="rounded-full h-10 w-10 mr-3">
        <div>
          <div class="text-black mb-1 text-sm">
          </div>
          <div class="text-zinc-400 text-xs">
          </div>
        </div>
      </div>
    </div> -->
  </nav>
</template>

<script setup>
import SidebarLinkVue from './SidebarLink.vue';
import { useMainStore } from '../../stores/mainStore';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
const mainStore = useMainStore();
const router = useRouter();

const userLinks = [
  { to: 'userHome'   , name:'Inicio',       icon:['fa','house']             },
  { to: 'chatHome'   , name:'Chat',         icon:['fa','comment']           },
];

const techLinks = [
  { to: 'techHome'   , name:'Inicio',       icon:['fa','house']             },
  { to: 'ticket-list', name:'Tickets',      icon:['fa','list']              },
  { to: 'chatHome'   , name:'Chat',         icon:['fa','comment']           },
];

const adminLinks = [
  { to: 'techHome'   , name:'Inicio',       icon:['fa','house']             },
  { to: 'ticket-list', name:'Tickets',      icon:['fa','list']              },
  { to: 'userHome'   , name:'Solicitudes',  icon:['fa','file-circle-check'] },
  { to: 'adminHome'  , name:'Estadisticas', icon:['fa','chart-column']      },
  { to: 'userSignin' , name:'Registrar',    icon:['fa','user-plus']         },
  { to: 'chatHome'   , name:'Chat',         icon:['fa','comment']           },
];

const links = ref([]);

const clsSession = () => {
  mainStore.logOut();
  router.push({ name:'login' });
}

const setLinks = (rol) =>{
  if(rol == 'tech') links.value = techLinks; 
  else if(rol == 'user') links.value = userLinks; 
  else links.value = adminLinks;
}

onMounted(() =>{
  if(mainStore.getRol) setLinks(mainStore.getRol);
});
</script>

<style scoped>
p{
  margin:-2.5% 0;
}
</style>