<script setup>
  import Navbar from "../components/navbar/Navbar.vue";
</script>

<template>
  <div class="text-left w-full h-full flex flex-row  border border-green-500" id="home">
    <div class="border border-red-700 w-16 basis-2/12">
      <Navbar/>
    </div>
    <div class="border border-blue-700 basis-10/12">
      <router-view/>
    </div>
  </div>
</template>


<style scoped>

</style>