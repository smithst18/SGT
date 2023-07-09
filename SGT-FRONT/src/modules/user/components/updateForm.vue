<template>
  <div>
    <form @submit.prevent="submitForm" enctype="multipart/form-data" class="w-full">
      <!-- nombre de usuario y nickname -->
      <div class="main-box">
  
        <div class="input-box-full">
          <label class="label-item" for="grid-nick-name">
            nick name
          </label>
          <input :class="[ !v$.nickName.$error ?'input-item' : 'input-item-error']" id="grid-nick-name" type="text" placeholder="user"
            v-model="form.nickName">
          <p class="error-msg" v-if="v$.nickName.$error">Campo requerido min(2) max(15)</p>
        </div>
  
      </div>
      <!-- password y password re
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
  
      </div>  -->
  
      <div class="main-box">  
  
        <div class="input-box-full">
          <span class="block label-item">foto de perfil</span>
          <div class="flex items-center justify-center w-full">
            <label for="image" class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 primary:hover:bg-bray-800 primary:bg-gray-700 hover:bg-gray-100 primary:border-gray-600 primary:hover:border-gray-500 primary:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click para cargar</span></p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p>
              </div>
              <input id="image" type="file" class="hidden" ref="file" @change="handleFileUpload" accept="image/*"
              capture/>
            </label>
          </div> 
          <p class="error-msg text-center" v-show="!validFile">
            Archivo requerido en formato adecuado
          </p>
        </div>
  
      </div>
  
      <div>
        <button type="submit"
          class="submit-button">Guardar</button>
      </div>
    </form>
<!-- 
    <EditImageModal 
    :showModal="showModal"
    @close-modal="toggleModal">
      <template #header>
        <p class="mr-5 text-md text-primary">Ajustar imagen de perfil</p>
      </template>
      <template #body> 

        <div class="grid gap-4 grid-cols-2 border border-green-600 text-center">
          
          <div class="border border-yellow-700 p-5">
            <h4>Prev de la imagen</h4>
            <canvas id="preview" class="border"></canvas>
          </div>

          <div class="border border-yellow-700 p-5">
            <h4>Recortar</h4>
            <div id="editor">
              recortar
            </div>
          </div>

        </div>

      </template>
      <template #footer>
        <div class="flex">
          <button class="px-5 py-2 rounded bg-primary text-white ml-auto" @click="toggleModal">Aceptar</button>
        </div>
      </template>
    </EditImageModal> -->

  </div>
</template>

<script setup>
// import { defineAsyncComponent, inject, onMounted, reactive, ref } from 'vue';
import { inject, onMounted } from 'vue';
import { required, minLength, maxLength } from '@vuelidate/validators';
import { useFormValidator } from "@/composables/useFormValidator.js";
import { useModal } from '@/composables/useModal';
import { useImgs } from '@/composables/useImgs';
import { ref } from '@vue/reactivity';
import { useMainStore } from '@/stores/mainStore';
import { updateUser } from '@/services/userService.js';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const mainStore = useMainStore();
// const EditImageModal = defineAsyncComponent(() => import('@/components/BasicModal.vue'));
  const swal = inject('$swal');

  const validFile = ref(false);
  const userToUpdate = { 
    id:'',
    nickName:'',
    // password:'',
    // rePassword:'',
    profileIMG:''
  };

  const validations = {
    nickName:{ 
      required,
      minLength: minLength(2),
      maxLength: maxLength(20)
    },
    // password:{ 
    //     minLength: minLength(5),
    //     maxLength: maxLength(20) 
    // },
    // rePassword:{
    //   maxLength: maxLength(20) 
    // },
  };

  const { showModal, toggleModal } = useModal();

  const { form, v$, validateForm, resetForm } = useFormValidator(userToUpdate,validations,'Datos Actualizados Correctamente');

  const { imgSrc, validateImg } = useImgs();
  

  const handleFileUpload = (e) =>{
    //capturar la imagen cargada
    let file = e.target.files[0];
    //asignar la imagen cargada al formulario a enviar
    form.profileIMG = file;

    //mostrar alerta de archivo incorrecto si arroja falso
    if(validateImg(file)){
      validFile.value = true
    }else validFile.value = false;
  }

  const submitForm =  async(e) => {
    const validForm  = await validateForm();

    if(validForm && validFile.value){
      const response  = await updateUser(form);
      console.log(response)
      if(response.status){
        cookies.set('user_loged',response.data.updated);
        mainStore.logedUser.profileImgUrl = response.data.updated.profileImgUrl;
        swal({title:"Usuario actualizado",icon:"success"});
      }else{
        swal({title:"Error al actualizar",text:`${response.data.message}`, icon:"error"});
      }
    }else swal({title:"Formato de Archivo invalido / campo vacio",icon:"error"});
  };

  onMounted(() =>{
    form.id = mainStore.logedUser.id;
    form.nickName = mainStore.logedUser.nickName;
  });
</script>

<style scoped>
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
.input-file-ite{
  @apply block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-3 px-4 mb-3
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