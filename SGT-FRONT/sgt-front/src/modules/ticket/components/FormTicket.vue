<template>
  <form @submit.prevent="submitForm" class="w-full">
    <!-- nombre de usuario y nickname -->
    <div class="main-box">

      <div class="input-box">
        <label class="label-item" for="grid-nick-name">
          nombre de usuario
        </label>
        <input id="grid-nick-name" type="text" placeholder="user"
          >
        <p class="error-msg" >Porfavor rellena el campo</p>
      </div>

      <div class="input-box">
        <label class="label-item" for="grid-name">
          nombre
        </label>
        <input id="grid-name" type="text" placeholder="name lastname"
          >
        <p class="error-msg">Porfavor rellena el campo</p>
      </div>
    </div>
    <div>
      <button type="submit"
        class="submit-button">Guardar</button>
    </div>
  </form>
</template>

<script setup>

</script>

<style>
.main-box{
  @apply flex flex-wrap -mx-3 mb-6
}
.input-box{
  @apply w-full md:w-1/2 px-3 mb-6 md:mb-0
}
.input-box-full{
  @apply w-full md:w-full px-3 mb-6 md:mb-0
}
.input-item{
  @apply appearance-none block w-full bg-gray-100 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
}
.label-item{
  @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2
}
.input-item-error{
  @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
}
.error-msg{
  @apply text-red-500 text-xs italic
}
.icon-item{
  @apply pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 
}
.submit-button{
  @apply py-2 w-full rounded bg-primary text-secondary hover:bg-primary/75 focus:ring focus:ring-primary/75
}
</style>