<script setup lang="ts">
  import SideBar from "../components/sidebar/SideBar.vue";
</script>

<template>
  <main class="w-full h-full flex" id="home">
    <!--sidebard-->
    <SideBar class="shadow-md"/>

    <!--routerview desde aca se controlan los margenes generales  para todas las vistas con el md:p-6 marcando un p-6 desde vistas de tableta en adelante-->
    <div class="router-views w-full md:px-6">
      <router-view/>
    </div>
  </main>
</template>

<style>
/* permite la vista de la barra en el responsive */
.router-views{
  @media (max-width:768px){
    padding-left: 5rem;
  }
}
</style>