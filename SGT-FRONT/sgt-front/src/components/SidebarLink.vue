<template>
  <router-link 
    v-if="link"
    :to="route"
    v-slot="{ /*href,*/isActive}"
    class="relative py-3 mb-3">
    <div :class="isActive ? 'is-active' : 'in-active' ">
        <div class="lg:ml-8 md:ml-6 ml-8 flex">
            <div class="mr-3">
                <i :class="link.icon"></i> 
            </div>
            <div class="text-sm">
                {{link.name}}
            </div>
        </div>
    </div>
  </router-link>
</template>

<script setup>
</script>

<style lang="postcss" scoped>

</style>