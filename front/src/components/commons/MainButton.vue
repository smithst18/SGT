<script setup lang="ts">
    const props =  defineProps<{
        title: string,
        fullSize: Boolean,
    }>();

</script>
<template>
    <button class="px-4 py-2 rounded-md bg-primary text-secondary text-sm hover:bg-primary-light transition ease-in-out delay-75 active:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
            :class="{'w-full' : fullSize}">
        {{ props.title }}
    </button>
</template>