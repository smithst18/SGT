<template>
<div class="md:flex md:p-3 md:h-full">
  <Navbar />
  <div class="md:ml-5 md:w-full md:flex border border-cyan-400">
    <RouterView />
  </div>
</div>
</template>

<script setup>
  import Navbar from "../components/NavBar.vue";
</script>

<style scoped>
</style>
