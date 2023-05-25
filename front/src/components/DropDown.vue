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
    onMounted(()=> console.log(props));
</script>

<template>
  <div @click="emit('inFocus')" :class="[list_is_spanded && is_spanded ? 'bg-secondary': 'bg-primary']">
    <div class="menu-item cursor-pointer" @click="toggleList" >
      <span class="material-symbols-sharp">{{ props.icon }}</span>
      <span class="menu-text">{{ props.title }}</span>
      <span class="ml-auto material-symbols-outlined desplegable-icon text-third">chevron_right</span>
    </div>
    <ol class="menu-list" v-show="list_is_spanded">
      <li>opcion1</li>
      <li>opcion2</li>
      <li>opcion3</li>
    </ol>
  </div>
</template>

<style scoped lang="scss">

</style>