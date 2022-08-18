<template>
  <nav class="md:flex md:flex-col bg-primary text-secondary text-xs md:w-1/5 md:auto shadow-md md:rounded-lg sticky  top-0">
    <!-- toggle button  + logo -->
    <div class="lg:px-10 md:py-10 md:block p-5 flex items-center">
      
      <img src="" alt="" class="pointer">
      <div class="mx-auto">
        <!-- @click="changeIcon()"  va en el icono-->
        <!-- <i :class="toggleIcon"></i> -->
      </div>
    </div>
    <!-- links -->
    <div class="md:mb-auto md:mt-16 md:z-auto md:static md:opacity-100 md:pl-0 pl-7  absolute bg-primary w-full left-0 opacity-0 top-[-400px] transition-all ease-out duration-700 md:transition-none" id="collapse"
      v-if="userLinks">
      <SidebarLinkVue v-for="link in userLinks" :key="link.name" :link="link" class="block"/>
    </div>
    <!-- logOut button -->
    <a class="md:ml-10 md:mb-5 pointer hidden md:block text-sm opacity-50 hover:opacity-100">
      Cerrar sesion  
    </a>
    <!-- minicard -->
    <div class="p-3 hidden lg:block">
      <div class="border flex items-center bg-secondary rounded-lg p-2 ">
        <img src="https://github.com/mdo.png" class="rounded-full h-10 w-10 mr-3">
        <div>
          <div class="text-black mb-1 text-sm">
          </div>
          <div class="text-zinc-400 text-xs">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import SidebarLinkVue from './SidebarLink.vue';

const userLinks = [
  {to: 'techHome', name:'tech',icon:"fa-solid fa-house"},
  {to: 'userHome', name:'ticket request',icon:"fa-solid fa-house"},
  {to: 'adminHome', name:'adm',icon:"fa-solid fa-house"},
  {to: 'ticket-list', name:'tickets',icon:"fa-solid fa-house"},
  {to: 'userSignin', name:'save user',icon:"fa-solid fa-house"},
];
// const techLinks = [
//   {},
//   {},
//   {},
// ]
// const adminLinks = [
//   {},
//   {},
//   {},
// ]
</script>

<style scoped>
p{
  margin:-2.5% 0;
}
</style>