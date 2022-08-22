<template>
  <form @submit.prevent="submitForm" class="w-full">
    <!-- nombre de usuario y nickname -->
    <div class="main-box">

      <div class="input-box">
        <label class="label-item" for="grid-nick-name">
          nombre de usuario
        </label>
        <input :class="[ !v$.nickname.$error ?'input-item' : 'input-item-error']" id="grid-nick-name" type="text" placeholder="user"
          v-model="form.nickname">
        <p class="error-msg" v-if="v$.nickname.$error">Porfavor rellena el campo</p>
      </div>

      <div class="input-box">
        <label class="label-item" for="grid-name">
          nombre
        </label>
        <input :class="[ !v$.name.$error ?'input-item' : 'input-item-error']" id="grid-name" type="text" placeholder="name lastname"
          v-model="form.name">
        <p class="error-msg" v-if="v$.name.$error">Porfavor rellena el campo</p>
      </div>
    </div>

    <!-- document -->
    <div class="main-box">

      <div class="input-box-full">
        <label class="label-item" for="grid-document">
          Documento
        </label>
        <input :class="[ !v$.document.$error ?'input-item' : 'input-item-error']" id="grid-document" type="text" placeholder="00000000"
          v-model="form.document">
        <p class="error-msg" v-if="v$.document.$error">Campo vacio / datos invalidos</p>
      </div>

    </div>
    <!-- password y password re -->
    <div class="main-box">

      <div class="input-box">
        <label class="label-item" for="grid-password">
          contraseña
        </label>
        <input :class="[ !v$.password.$error ?'input-item' : 'input-item-error']" id="grid-password" type="password" placeholder="*********"
          v-model="form.password">
        <p class="error-msg" v-if="v$.password.$error">Porfavor rellena el campo</p>
      </div>

      <div class="input-box">
        <label class="label-item" for="grid-re-password">
          repetir contraseña
        </label>
        <input :class="[ !v$.repassword.$error ?'input-item' : 'input-item-error']" id="grid-re-password" type="password" placeholder="*********"
          v-model="form.repassword">
        <p class="error-msg" v-if="v$.repassword.$error">Las Contraseñas deben coincidir</p>
      </div>

    </div> 

    <div class="main-box">
        <div class="input-box">
          <label class="label-item" for="grid-entity">
            Entidad
          </label>
          <div class="relative">
            <select :class="[ !v$.entity.$error ?'input-item' : 'input-item-error']" id="grid-entity" v-model="form.entity">
              <option v-bind:value="'Hardware'">Hardware</option>
              <option>Software</option>
              <option>Red</option>
            </select>
            <div class="icon-item">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="input-box">
          <label class="label-item" for="grid-position">
            Cargo
          </label>
          <div class="relative">
            <select :class="[ !v$.position.$error ?'input-item' : 'input-item-error']" id="grid-position" v-model="form.position">
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

const userToSave = {
  nickName:'',
  name:'',
  document:'',
  password:'',
  repassword:'',
  entity:'',
  position:'',
}
const validations = {
  nickname: { required },
  name: { required, alphaNum },
  document: { required, numeric },
  password: { required, minLength: minLength(6) },
  repassword: { required },
  entity: { required },
  position: { required },
}

const { form, v$, validateForm } = useFormValidator(userToSave,validations,'Usuario Guardado Correctamente'); 

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