<template>
  <form @submit.prevent="submitForm" class="w-full">
    <!-- nombre de usuario y nickname -->
    <div class="main-box">

      <div class="input-box">
        <label class="label-item" for="grid-nick-name">
          nick name
        </label>
        <input :class="[ !v$.nickName.$error ?'input-item' : 'input-item-error']" id="grid-nick-name" type="text" placeholder="user"
          v-model="form.nickName">
        <p class="error-msg" v-if="v$.nickName.$error">Campo requerido min(2) max(15)</p>
      </div>

      <div class="input-box">
        <label class="label-item" for="grid-name">
          nombre
        </label>
        <input :class="[ !v$.name.$error ?'input-item' : 'input-item-error']" id="grid-name" type="text" placeholder="name lastname"
          v-model="form.name">
        <p class="error-msg" v-if="v$.name.$error">Campo requerido min(2) max(15)</p>
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
        <p class="error-msg" v-if="v$.password.$error">Campo requerido min(5) max(15)</p>
      </div>

      <div class="input-box">
        <label class="label-item" for="grid-re-password">
          repetir contraseña
        </label>
        <input :class="[ !v$.rePassword.$error ?'input-item' : 'input-item-error']" id="grid-re-password" type="password" placeholder="*********"
          v-model="form.rePassword">
        <p class="error-msg" v-if="v$.rePassword.$error">Las Contraseñas deben coincidir</p>
      </div>

    </div> 

    <div class="main-box">
        <div class="input-box">
          <label class="label-item" for="grid-entity">
            Entidad
          </label>
          <div class="relative">
            <select :class="[ !v$.entity.$error ?'input-item' : 'input-item-error']" id="grid-entity" v-model="form.entity">
              <option disabled value="">Selecionar Dep/Entidad</option>
              <option 
                v-for="entity in entityStore.getAll" 
                :key="entity._id" 
                :value="entity._id">

                {{ entity.name }}

              </option>

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
              <option disabled value="">Seleccionar Cargo/Posicion</option>
              <option 
                v-for="position in positionStore.getpositionsByEntity" 
                :key="position._id" 
                :value="position._id">

                {{ position.name }}

              </option>

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
import { inject, onMounted, watch } from 'vue';
import { required, numeric, minLength, maxLength } from '@vuelidate/validators';
import { useFormValidator } from "@/composables/useFormValidator.js";
import { signIn } from "@/services/userService.js";
import { usePositionStore } from "@/modules/positions/store/positionStore.js";
import { useEntityStore } from "@/modules/entitys/store/entityStore.js";

const positionStore = usePositionStore();
const entityStore = useEntityStore();

const swal = inject('$swal');

const userToSave = {
  nickName:'',
  name:'',
  document:'',
  password:'',
  rePassword:'',
  entity:'',
  position:'',
}

const validations = {
  nickName:{ 
    required,
    minLength: minLength(2),
    maxLength: maxLength(15)
  },
  name:{ 
    required, 
    minLength: minLength(2),
    maxLength: maxLength(15) 
  },
  document:{ 
    required, 
    numeric,
    minLength: minLength(5),
    maxLength: maxLength(8)
  },
  password:{ 
    required, 
    minLength: minLength(5),
    maxLength: maxLength(12) 
  },
  rePassword:{
    required,
    maxLength: maxLength(12) 
  },
  entity:{ 
    required 
  },
  position:{ 
    required 
  },
}

const { form, v$, validateForm, resetForm } = useFormValidator(userToSave,validations,'Usuario Guardado Correctamente'); 

watch(
  () => form.entity,
  () => {
    positionStore.setPositions(form.entity);
  }
);

const submitForm = async () => {

  const valid  = await validateForm();
  
  if(valid){
    const response  = await signIn(form);
    if(response.status){
      swal({title:"Usuario Guardado",icon:"success"});
      resetForm();
    }else{
      swal({title:"Error al Guardar",text:`${response.errors[0].msg} campo ${response.errors[0].param} ${response.errors[0].value}`, icon:"error"});
    }
  }
}

onMounted(() =>{
  entityStore.setAllEntitys();
})
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