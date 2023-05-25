<script setup>
  import SideBar from "../components/navbar/SideBar.vue";
</script>

<template>
  <main class="w-full h-full flex" id="home">
    <!--sidebard-->
    <SideBar/>

    <!--routerview-->
    <div class="router-views border w-full">
      1256 asdsdasdasdadsds
      <router-view/>
    </div>

  </main>
</template>


<style scoped lang="scss">

/*permite que cuadre la vista con la barra responsive*/
.router-views{
  @media (max-width:768px){
    padding-left: 5rem;
  }
}
</style>