<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import type { TicketLink } from '@/interfaces/sidebarInterface';
    const props = defineProps<{
      icon: string,
      title: string,
      links: Array<TicketLink>,
      is_spanded: boolean
    }>();
    
    const emit = defineEmits<{
        (event:'inFocus'):void,
    }>();

    const list_is_spanded = ref(false);
    const toggleList = () => list_is_spanded.value = !list_is_spanded.value;
</script>

<template>
  <div @click="emit('inFocus')" class="pb-2 cursor-pointer">
    <div class="menu-item" @click="toggleList" :class="{'bg-primary text-secondary': list_is_spanded}">
      <span class="material-symbols-sharp">{{ props.icon }}</span>
      <span class="menu-text">{{ props.title }}</span>
      <span 
        class="ml-auto material-symbols-outlined desplegable-icon transition duration-900 ease-out"
        :class="{'toggle-wrap-icon': list_is_spanded}"
        >chevron_right</span>
    </div>
    <transition name="submenu">
      <ol class="menu-list" v-if="list_is_spanded && is_spanded">
        <li v-for="link in links">
          <router-link
            :to="{ name:link.to }"
            v-slot="{ isActive }"
            >
            <span :class="{'text-primary-light': isActive}"> {{ link.name }} </span>
          </router-link>
        </li>
      </ol>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.submenu-enter-active,
.submenu-leave-active {
  animation: rotateMenu 400ms ease-in;
}
.submenu-enter-from,
.submenu-leave-to {
  animation: rotateMenu 00ms ease-in;
  opacity: 0;
}
@keyframes rotateMenu {
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }
}
.toggle-wrap-icon {
  transform: rotate(90deg);
}
</style>