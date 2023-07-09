<script setup>
import { onMounted, ref } from "vue";
const progress = document.querySelector('#progress');
const progressporcentage = ref(70);
const props = defineProps({
    progressporcentage:{
      require:true,
      type:Number
    },
}) 
</script>

<template>
    <div class="flex items-center">
        <font-awesome-icon :icon="['fa','fa-user-check']" class="text-[#1631df] text-md shadow-sm"></font-awesome-icon>
        <progress id="progress" max="100" :value="progressporcentage" class="w-full mx-2 h-6 relative shadow-md rounded-full" ref="progress"></progress>
        <font-awesome-icon :icon="['fa','user-xmark']" class="text-[#e83b3b] text-md shadow-sm"></font-awesome-icon>
    </div>
</template>

<style lang="css" scoped>
progress::-webkit-progress-bar {
	margin:0 auto;
	background-color:#e83b3b;
	border-radius:100px;
    box-shadow: 0 0 0 1px #d5d5d5d5;
    z-index: 100;
}
progress::after {
	content: attr(value) "%";
    color: white;
    position: absolute;
    top: 10%;
    left: 48%;
    @apply text-sm font-thin
}
progress::-webkit-progress-value {
	display:inline-block;
    padding-left:50px; /* Rounded corners requires a padding */
	background:#1631df;
	border-radius:100px;
}
</style>