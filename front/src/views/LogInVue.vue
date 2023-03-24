<script setup>
import { ref } from 'vue';
const errorlogin = ref(false);
const errorServer = ref(false);
const sendForm =() => {
  console.log('form enviado');
}
</script>

<template>
  <div class="text-left w-full h-full border border-gray-900">
    <div class="border border-purple-800 w-full h-full flex items-center justify-center">
      addasasdasdasd
      <form @submit.prevent="sendForm" id="form" 
      class="h-2/4 md:w-1/4  p-10 border border-gray-300 rounded-sm shadow-sm">
        <div class="relative z-0 w-full mb-10">
          <input
          type="text"
          name="userName"
          required
          placeholder=" "
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre de usuario</label>
        </div>
  
        <div class="relative z-0 w-full mb-10">
          <input
          type="password"
          name="password"
          required
          placeholder=" "
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Contraseña</label>
        </div>
  
        <div class="text-center">
          <span 
          class="text-sm text-center text-red-600" 
          id="error"
          v-show="errorlogin">
            Usuario / Contraseña invalidos
          </span>
        </div>
  
        <div class="text-center">
          <span 
          class="text-sm text-center text-red-600" 
          id="error"
          v-show="errorServer">
            Error de Servidor
          </span>
        </div>
              
        <button 
        type="submit"
        class="px-6 py-2 mt-4 text-white bg-blue-700 rounded-sm hover:bg-blue-500 w-full">
          Iniciar Sesion
        </button>
      </form>
    </div> 
  </div>
</template>

<style scoped>

input {
  @apply pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 border-gray-300
}

input:-webkit-autofill

.-z-1 {
    z-index: -1;
  }
  .origin-0 {
    transform-origin: 0%;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }
  input:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    left: 0px;
  }
</style>
