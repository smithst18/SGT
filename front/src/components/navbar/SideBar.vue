<script setup>
  import { ref } from 'vue';
  import SidebarDropdown from '../DropDown.vue';

  const is_spanded = ref(false);
  const toggleMenu = () => is_spanded.value = !is_spanded.value ;
  const spandDropdown = () => { 
    if(is_spanded.value == false) toggleMenu();
  }
</script>

<template>
  <aside class="bg-primary" :class="{ is_spanded:is_spanded }">
    <!-- logotype -->
    <div class="logo">
      <img src="@/assets/imgs/logo.png" alt="SGTI_LOGO">
    </div>
    <!-- Toggle button -->
    <button 
      id="toggle-wrap"  
      class="absolute w-6 h-6 -right-2 top-20 z-100 shadow-md bg-secondary rounded-full material-symbols-outlined text-[18px] text-third transition duration-700 ease-out hover:-translate-x-1"
      @click="toggleMenu">
      chevron_right
    </button>
    <!--menu options-->
    <div class="menu">
      <h3 class="hidden lg:block font-bold uppercase ml-4 text-third">
        General
      </h3>
      <SidebarDropdown title="Tickets" icon="local_activity" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <SidebarDropdown title="Correo" icon="mail" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <SidebarDropdown title="Chat" icon="chat" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <SidebarDropdown title="Gestion" icon="manage_accounts" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
    </div>
    <!--user config-->
    <div class="flex mt-auto user-card p-2 rounded">
      <span class="user-card-text order-2">Cliente</span>
      <button class="material-symbols-sharp ml-auto logout-icon order-1 text-third">logout</button>
    </div>

  </aside>
</template>

<style lang="scss">
aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  padding: 1rem;
  position: relative;
  
  transition: 0.3s ease-out;
  
  @media (max-width: 768px){
    position: fixed;
    z-index: 99;
    min-height: 100vh;
  }

  h3, .menu-item .menu-text,.desplegable-icon {
    opacity: 0;
    z-index: -999;
    transition: 0.2s ease-out;
    cursor: auto;
  }

  .menu {
    margin: 0 -1rem;
    @apply mt-20;

    
    .menu-item {
      @apply flex items-center relative;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      &:hover {
        @apply bg-secondary
      }
    }
    .material-symbols-sharp { 
      @apply text-[2rem] text-third;
      transition: 0.2s ease-out;
    }
    .menu-text {
      @apply text-third ml-3;
      transition: 0.2s ease-out;
    }
    /*stylos para el submenu cuando la barra no esta desplegada*/
    // .menu-list {
    //   display : none ;
    //   transition: 0.3s ease-out;
    //   // @apply bg-secondary absolute left-full -mt-14 p-5 min-w-[200px] text-third;
    // }
  }

  &.is_spanded {
    width: var(--sidebar-width);

    #toggle-wrap {
      transform: rotate(-180deg);
    }
    h3, .menu-item .menu-text,.desplegable-icon {
      opacity: 1;
      z-index: 999;
    }
    .material-symbols-sharp { 
      @apply text-[2rem];
    }
    .logout-icon { 
      @apply order-2 text-secondary;
    }
    .user-card{
      @apply bg-third;
    }
    .user-card-text {
      visibility: visible;
    }
    .menu-list {
       @apply text-third left-0 mt-0;
       li{
        @apply ml-5 my-3
       }
    }
  }

  .logout-icon{
    &:hover {
      @apply text-secondary
    }
  }
  .user-card-text {
    visibility: hidden;
  }
}

</style>