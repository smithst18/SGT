<script lang="ts" setup>
  import { ref } from 'vue';
  import SidebarDropdown from '@/components/sidebar/DropDown.vue';
  import userCard from '../commons/userCard.vue';
  const emits = defineEmits<{
    (event:'OnToggleSidebar',is_spanded:boolean ):void
  }>();

  const is_spanded = ref(false);

  const ticketLinks = [
    { to: 'dashboard'    , name:'Inicio',      icon:['fa','comment']      },
    { to: 'pending'      , name:'Pendientes',  icon:['fa','comment']      },
  ];


  const toggleMenu = () => {
    is_spanded.value = !is_spanded.value ;
    emits('OnToggleSidebar',is_spanded.value);
  }
  const spandDropdown = () => { 
    if(is_spanded.value == false) toggleMenu();
  }
</script>

<template>
  <aside :class="{ is_spanded:is_spanded }">

    <!-- logotype -->
    <div class="max-w-sm" :class="is_spanded ? 'inline' : 'hidden'">
      <img alt="SGTI_LOGO" id="logo" src="@/assets/imgs/artilogohorizontal.png">
    </div>
    <div class="mx-0 px-0" :class="!is_spanded ? 'inline' : 'hidden'">
      <img alt="SGTI_LOGO" id="logo" src="@/assets/imgs/sidebardminilogo.webp">
    </div>

    <!-- Toggle button -->
    <button 
      id="toggle-wrap"  
      class="absolute w-6 h-6 -right-2 top-20 z-100 shadow-md rounded-full material-symbols-outlined text-[18px] transition duration-700 ease-out hover:-translate-x-1" :class="[
        { 'bg-primary' : is_spanded },
        { 'text-secondary' : is_spanded },
        { 'bg-secondary' : !is_spanded },
        { 'text-primary' : !is_spanded }
      ]"
      @click="toggleMenu">
      chevron_right
    </button>

    <!--menu options-->
    <div class="menu max-h-[65%]  overflow-y-auto" :class="{'px-[1rem]':is_spanded}">
      <SidebarDropdown title="Tickets" icon="local_activity" :links="ticketLinks" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <!-- <SidebarDropdown title="Correo" icon="mail" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <SidebarDropdown title="Chat" icon="chat" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/>
      <SidebarDropdown title="Gestion" icon="manage_accounts" :options="[]" :is_spanded="is_spanded" @in-focus="spandDropdown"/> -->
    </div>
    <!--user config-->
    <div class="flex mt-auto mb-5">
      <userCard :is_spanded="is_spanded" class="cursor-pointer"/>
    </div>

      

  </aside>
</template>

<style lang="scss">
aside{
  @apply bg-primary flex flex-col relative p-[1rem] text-secondary;
  width: calc(2rem + 32px);
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
  .menu::-webkit-scrollbar{
    display: none;
  }
  .menu {
    margin: 0 -1rem;
    @apply mt-16;
    
    .menu-item {
      @apply flex items-center relative; 
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      &:hover{
        @apply text-primary bg-secondary
      }
    }
    .material-symbols-sharp { 
      @apply text-[2rem];
      transition: 0.2s ease-out;
    }
    .menu-text {
      @apply ml-3;
      transition: 0.2s ease-out;
    }

  }

  &.is_spanded {
    width: var(--sidebar-width);
    @apply bg-secondary text-third;

    .menu{
      @apply mt-8;
    }
    #toggle-wrap {
      transform: rotate(-180deg);
    }
    h3, .menu-item .menu-text,.desplegable-icon {
      opacity: 1;
      z-index: 999;
    }
    .menu-item {
      @apply rounded-md;
      &:hover {
        @apply text-secondary bg-primary
      }
    }
    .material-symbols-sharp { 
      @apply text-[2rem];
    }
    .logout-icon { 
      @apply order-2;
    }
    .user-card-text {
      visibility: visible;
    }
    .menu-list {
       @apply left-0 mt-0;
       li{
        @apply ml-8 my-2
       }
    }
    .logout-icon{
      @apply text-aux;
    }
  }
  .user-card-text {
    visibility: hidden;
  }
}
</style>