<script setup>
  import { ref } from 'vue';
  const is_spanded = ref(false);
  const toggleMenu = () => is_spanded.value = !is_spanded.value;
</script>

<template>
  <aside class="bg-primary relative" :class="{ is_spanded:is_spanded }">
    <!-- logotype -->
    <div class="logo">
      <img src="@/assets/imgs/minilog.png" alt="SGTI_LOGO">
    </div>
    <!-- Toggle button -->
    <button 
      id="toggle-wrap"
      class="absolute w-6 h-6 -right-2 top-16 z-100 shadow-md bg-secondary rounded-full material-symbols-outlined text-[18px] text-third"
      @click="toggleMenu">
      chevron_right
    </button>
    <!--menu options-->
    <div class="menu">
      <h3 class="hidden lg:block font-bold uppercase text-slate-500 menu-text">
        General.
      </h3>

      <router-link class="menu-item" to="/">
        <span class="material-symbols-sharp">local_activity</span>
        <span class="menu-text">text</span>
      </router-link>

      <router-link class="menu-item" to="/">
        <span class="material-symbols-sharp">inventory</span>
        <span class="menu-text">Inventario</span>
      </router-link>

      <router-link class="menu-item" to="/">
        <span class="material-symbols-sharp">mail</span>
        <span class="menu-text">Correo</span>
      </router-link>

      <router-link class="menu-item" to="/">
        <span class="material-symbols-sharp">chat</span>
        <span class="menu-text">Chat</span>
      </router-link>

      <router-link class="menu-item" to="/">
        <span class="material-symbols-sharp">manage_accounts</span>
        <span class="menu-text">Gestion</span>
      </router-link>
    </div>
    <!--user config-->
    <div class="border border-blue-500 flex mt-auto user-card">
      <span class="border menu-text order-2">Cliente</span>
      <span class="material-symbols-sharp border ml-auto logout-icon order-1 text-third">logout</span>
    </div>

  </aside>
</template>

<style scoped lang="scss">
aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  padding: 1rem;
  
  transition: 0.2s ease-out;

  h3, .menu-item .menu-text {
    visibility: hidden;
    transition: 0.3s ease-out;
  }

  .menu {
    margin: 0 -1rem;
    @apply mt-16;
    
    .menu-item {
      @apply flex items-center;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      &:hover {
        @apply bg-secondary
      }
    }
    .material-symbols-sharp { 
      @apply text-[2.5rem] text-third;
      transition: 0.2s ease-out;
    }
    .menu-text {
      @apply text-third ml-5;
      transition: 0.2s ease-out;
    }
  }

  &.is_spanded {
    width: var(--sidebar-width);

    #toggle-wrap {
      transform: rotate(-180deg);
    }
    h3, .menu-item .menu-text {
      visibility: visible;
    }
    .material-symbols-sharp { 
      @apply text-[2rem];
    }
    .logout-icon { 
      @apply order-2
    }
  }

  @media (max-width: 768px){
    position: fixed;
    z-index: 99;
    min-height: 100vh;
  }

  .logout-icon{
    &:hover {
      @apply text-secondary
    }
  }
}

</style>