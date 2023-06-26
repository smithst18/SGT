<script setup>
    import { onMounted, ref, watch, watchEffect } from 'vue';
    const props = defineProps({
        icon: String,
        title: String,
        options: Array,
        is_spanded: Boolean
    });
    watchEffect
    const emit = defineEmits(['inFocus']);

    const list_is_spanded = ref(false);
    const toggleList = () => list_is_spanded.value = !list_is_spanded.value;
</script>

<template>
  <div @click="emit('inFocus')" class="pb-2" :class="[list_is_spanded && is_spanded ? 'bg-secondary': 'bg-primary']">
    <div class="menu-item cursor-pointer" @click="toggleList" >
      <span class="material-symbols-sharp">{{ props.icon }}</span>
      <span class="menu-text">{{ props.title }}</span>
      <span class="ml-auto material-symbols-outlined desplegable-icon text-third">chevron_right</span>
    </div>
    <transition name="submenu">
      <ol class="menu-list" v-if="list_is_spanded && is_spanded">
        <li>opcion1</li>
        <li>opcion2</li>
        <li>opcion3</li>
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
  @apply bg-secondary
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
</style>