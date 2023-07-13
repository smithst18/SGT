<script setup>
  import SideBar from "../components/SideBar/TheSidebar.vue";
  import EncuestaModal from "../components/BasicModal.vue";
  import { onMounted } from "vue";
  import { useModal } from "../composables/useModal";
  import { useMainStore } from "../stores/mainStore";
  import { saveSurvey } from "../services/surveyService";
  import { useFormValidator } from "../composables/useFormValidator";
  import { required, alphaNum, minLength, maxLength } from '@vuelidate/validators';
  const { showModal, toggleModal } = useModal();
  showModal.value = false;
  const mainStore = useMainStore();
  
  const surveyToSave = {
    pre1:'',
    pre2:'',
    pre3:'',
    client:mainStore.logedUser.id
  };
  
  const validations ={
    pre1:{ 
      required,
      alphaNum,
      minLength: minLength(2),
      maxLength: maxLength(2)
    },
    pre2:{ 
      required, 
      alphaNum,
      minLength: minLength(2),
      maxLength: maxLength(20) 
    },
    pre3:{ 
      alphaNum,
      maxLength: maxLength(300) 
    },
  };
  const { form, v$, validateForm, resetForm } = useFormValidator(surveyToSave,validations,'Encuesta registrada satisfactoriamente'); 

  const sendSurvey = async () =>{
    const valid  = await validateForm();
    if(valid){
      const resp = await saveSurvey(form);

      if(resp.status == 200){
        toggleModal();
        resetForm();
      }else alert('error al enviar la encuesta');
    }
  }

  onMounted( async () => {
    //reviza si puede o no enviar la encuesta 
    const resp = await mainStore.allowToSendSurvey(mainStore.logedUser.id);
    // si se ha encontrado las respuestas del usuario no se muestra el modal
    if(resp.status == 200) showModal.value = false;
    // si no encuentra data ense;a el modal 
    else showModal.value = true;
  });
</script>



<template>
<div class="md:flex md:p-3 md:h-full">
  <SideBar />
  
  <div class="md:ml-5 md:w-full md:flex">
    <RouterView />

    <EncuestaModal :showModal="showModal" @close-modal="toggleModal">
      <template #header>
        <h1 class="text-primary">DEJA TU OPINION.</h1>
      </template>
      <template #body >
        <form @submit.prevent="sendSurvey" class="text-md">

          <fieldset class="mb-3">
          <legend>¿Es de tu agrado ser parte del equipo del Pescalba?</legend>

          <div class="text-sm mt-1">
            <input type="radio" id="si" name="pregunta1" value="Si" v-model="form.pre1">
            <label for="huey">Si</label>
          </div>

          <div class="text-sm">
            <input type="radio" id="no" name="pregunta1" value="No" v-model="form.pre1">
            <label for="dewey">No</label>
          </div>

          <div class="text-xs mt-2 text-red-300" v-if="v$.pre1.$error">
            <p><span class="text-sm">* </span>Debes completar este campo</p>
          </div>

          </fieldset>

          <fieldset class="mb-3">
          <legend>¿Como calificarías la gestión actual?</legend>

          <div class="text-sm mt-1">
            <input type="radio" id="Excelente" name="pregunta2" value="Excelente" v-model="form.pre2">
            <label for="huey">Excelente</label>
          </div>

          <div class="text-sm">
            <input type="radio" id="Buena" name="pregunta2" value="Buena" v-model="form.pre2">
            <label for="dewey">Buena</label>
          </div>

          <div class="text-sm">
            <input type="radio" id="Regular" name="pregunta2" value="Regular" v-model="form.pre2">
            <label for="louie">Regular</label>
          </div>

          <div class="text-sm">
            <input type="radio" id="Deficiente" name="pregunta2" value="Deficiente" v-model="form.pre2">
            <label for="louie">Deficiente</label>
          </div>

          <div class="text-xs mt-2 text-red-300" v-if="v$.pre2.$error">
            <p><span class="text-sm">* </span>Debes completar este campo</p>
          </div>

          </fieldset>

          <div>
            <label for="" class="text-md">Sugerencias.</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm"  maxlength="300" v-model="form.pre3">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre3.$error">
              <p><span class="text-sm">* </span>Maximo 300 caracteres</p>
            </div>
          </div>

        </form>
      </template>
      
      <template #footer>
        <div class="flex">
          <button 
            @click="sendSurvey()"
            class="border border-primary px-5 py-1 rounded text-white bg-primary mx-auto hover:bg-slate-500 hover:border-slate-500">
            Enviar
          </button>
        </div>
      </template>
    </EncuestaModal>

  </div>
</div>
</template>


<style scoped>
input[type="radio"] {
  margin-right: 5px;
}
textarea {
  resize: none;
}
</style>
