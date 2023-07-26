<script setup lang="ts">
</script>

<template>
    <div class="text-left w-full h-full" id="login">
    <div class="w-full h-full flex flex-col items-center justify-center">
      <!-- LOGO -->
      <div class="w-4/5 lg:w-1/4 md:w-1/3 sm:w-3/6 mb-5 py-3">
        <img src="../assets/imgs/logo_transparent.png" alt="SGTI logo" class="w-full h-auto">
      </div>
      <!-- fORMULARIO -->
      <form  id="form" 
      class="h-2/4 w-4/5 lg:w-1/4 md:w-1/3 sm:w-3/6  p-10 border rounded-sm shadow-md bg-white">
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
          >
            Usuario o Contraseña invalidos.
          </span>
        </div>
  
        <div class="text-center">
          <span 
          class="text-sm text-center text-red-600" 
          id="error"
          >
            Error de Servidor.
          </span>
        </div>  
        <button 
        type="submit"
        class="px-6 py-2 mt-4 w-full text-white bg-primary rounded-sm hover:bg-primary-light focus:ring-2 focus:ring-primary transition delay-150 duration-150 ease-in-out">
          Iniciar Sesion
        </button>
      </form>
    </div> 
  </div>
</template>

<style scoped>
#login {
  background-image: url("../assets/imgs/loginBackground.jpg");
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover ;
}
input {
  @apply pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light border-gray-300
}
/* estilos para evitar errores en ela utocompletar de el formulario */ 
input {
    color: #000000 !important;
    -webkit-text-fill-color: #000000 !important;
    -webkit-background-clip: text !important;
    background-clip:  text !important;
  }

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