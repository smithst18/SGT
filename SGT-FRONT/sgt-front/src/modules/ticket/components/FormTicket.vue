<template>
  <form @submit.prevent="submitForm" class="w-full">
    <!-- nombre de usuario y nickname -->
    <div class="main-box">

      <div class="input-box">
        <label class="label-item" for="grid-item-name">
          Nombre del Bien/ item
        </label>
        <input id="grid-item-name" type="text" placeholder="item" :class="[ !v$.item.$error ?'input-item' : 'input-item-error']"
          v-model="form.item">
        <p class="error-msg" v-if="v$.item.$error">Porfavor rellena el campo</p>
      </div>

      <div class="input-box">
          <label class="label-item" for="grid-type">
            Prioridad
          </label>
          <div class="relative">
            <select :class="[ !v$.type.$error ?'input-item' : 'input-item-error']" id="grid-type" v-model="form.type">
              <option selected>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
            <div class="icon-item">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
      </div>
    </div>
    <!-- descripcion box -->
    <div class="main-box">

      <div class="input-box-full">
        <label class="label-item" for="grid-description">
          Breve descripcion del problema
        </label>
        <textarea id="grid-description" v-model="form.description" :class="[ !v$.description.$error ?'input-item' : 'input-item-error']"></textarea>
        <p class="error-msg" v-if="v$.description.$error">Porfavor rellena el campo min 10 caracteres</p>
      </div>

    </div>

    <div>
      <button type="submit"
        class="submit-button">Guardar</button>
    </div>
  </form>
</template>

<script setup>
import { required, numeric, alphaNum, minLength } from '@vuelidate/validators';
import { useFormValidator } from "@/composables/useFormValidator.js";
import { inject } from '@vue/runtime-core';
const swal = inject('$swal');

const ticketToSave = {
  item:'',
  description:'',
  type:'',
}
const validations = {
  item: { required,alphaNum , minLength: minLength(2) },
  description: { required, alphaNum, minLength: minLength(10) },
  type: { required, alphaNum },

}

const { form, v$, validateForm } = useFormValidator(ticketToSave,validations,'Ticket Guardado Correctamente'); 

const submitForm = async () => {
  const valid  = await validateForm();
  console.log(valid)
  if(valid) console.log('este form sirve para ser enviado xd')
}
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