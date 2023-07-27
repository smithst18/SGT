<script setup lang="ts">
  import SideBar from "../components/navbar/SideBar.vue";
</script>

<template>
  <main class="w-full h-full flex" id="home">
    <!--sidebard-->
    <SideBar/>

    <!--routerview-->
    <div class="router-views border w-full">
      <router-view/>
    </div>

  </main>
</template>

<style>
.router-views{
  @media (max-width:768px){
    padding-left: 5rem;
  }
}
</style>