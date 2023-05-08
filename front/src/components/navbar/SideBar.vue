<script setup>
  import { ref } from 'vue';
  const is_spanded = ref(false);
  const toggleMenu = () => is_spanded.value = !is_spanded.value;
</script>

<template>
  <aside class="bg-blue-300 relative" :class="{ is_spanded:is_spanded }">
    <!-- logotype -->
    <div class="logo">
      <img src="@/assets/imgs/minilog.png" alt="SGTI_LOGO">
    </div>
    <!-- Toggle button -->
    <button 
      id="toggle-wrap"
      class="absolute w-6 h-6 -right-2 top-16 z-100 shadow-md bg-red-500 rounded-full material-symbols-outlined text-[18px]"
      @click="toggleMenu">
      chevron_right
    </button>
    <!--menu options-->
    <div class="menu-toggle-wrap">
      <h3 class="hidden lg:block font-bold uppercase text-slate-500">
        General.
      </h3>

      <div>
        <span class="material-symbols-sharp">local_activity</span>
        <span>text</span>
      </div>

      <div>
        <span class="material-symbols-sharp">inventory</span>
        <span>Inventario</span>
      </div>

      <div>
        <span class="material-symbols-sharp">mail</span>
        <span>Correo</span>
      </div>

      <div>
        <span class="material-symbols-sharp">chat</span>
        <span>Chat</span>
      </div>

      <div>
        <span class="material-symbols-sharp">manage_accounts</span>
        <span>Gestion</span>
      </div>
    </div>
    <!--user config-->
    <div class="mt-auto">
      <h3 class="hidden lg:block font-bold uppercase text-slate-500">Config</h3>
      <div class="border border-blue-500 flex">
        <span class="border">Cliente</span>
        <span class="material-symbols-sharp border ml-auto">logout</span>
      </div>
    </div>

  </aside>
</template>

<style scoped lang="scss">
aside{
  display: flex;
  flex-direction: column;
  width: calc(2.5rem + 32px);
  padding: 1rem;
  
  transition: 0.2s ease-out;
  &.is_spanded {
    width: var(--sidebar-width);

    #toggle-wrap {
      transform: rotate(-180deg);
    }
  }

  @media (max-width: 768px){
    position: fixed;
    z-index: 99;
    min-height: 100vh;
  }

}
</style>