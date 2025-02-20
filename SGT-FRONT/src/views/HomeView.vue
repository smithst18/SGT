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
    pre4:'',
    pre5:'',
    pre6:'',
    pre7:'',
    pre8:'',
    pre9:'',
    pre10:'',
    pre11:'',
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
      maxLength: maxLength(500) 
    },
    pre3:{ 
      required, 
      minLength: minLength(2),
      maxLength: maxLength(2) 
    },
    pre4:{ 
      maxLength: maxLength(500)
    },
    pre5:{ 
      required, 
      maxLength: maxLength(500) 
    },
    pre6:{ 
      required, 
      maxLength: maxLength(500) 
    },
    pre7:{ 
      required,
      minLength: minLength(2),
      maxLength: maxLength(2)
    },
    pre8:{ 
      required, 
      minLength: minLength(2),
      maxLength: maxLength(2) 
    },
    pre9:{ 
      required, 
      minLength: minLength(2),
      maxLength: maxLength(2) 
    },
    pre10:{ 
      required,
      minLength: minLength(2),
      maxLength: maxLength(2)
    },
    pre11:{ 
      required, 
      maxLength: maxLength(500) 
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
        <form @submit.prevent="sendSurvey" class="text-md h-[800px] overflow-y-auto">

          <!-- 1 -->
          <fieldset class="mb-3">
            <legend>¿Conoce usted los valores que representan la institucion Pescalba?</legend>

            <div class="text-sm mt-1">
              <input type="radio" id="pre1si" name="pregunta1" value="si" v-model="form.pre1">
              <label for="pre1si">Si</label>
            </div>

            <div class="text-sm">
              <input type="radio" id="pre1no" name="pregunta1" value="no" v-model="form.pre1">
              <label for="pre1no">No</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre1.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 2 -->
          <div class="mb-3">
            <label for="" class="text-md">Mencione al menos 3 valores.</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm" v-model="form.pre2">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre2.$error">
              <p><span class="text-sm">* </span>Maximo 500 caracteres</p>
            </div>
          </div>

          <!-- 3 -->
          <fieldset class="mb-3">
            <legend>ha visto algun cambio positivo en la operatividad de la empresa ?</legend>

            <div class="text-sm mt-1">
              <input type="radio" id="Excelente" name="pregunta2" value="si" v-model="form.pre3">
              <label for="Excelente">si</label>
            </div>

            <div class="text-sm">
              <input type="radio" id="Buena" name="pregunta2" value="no" v-model="form.pre3">
              <label for="Buena">no</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre3.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 4 -->
          <div class="mb-3">
            <label for="" class="text-md">Si su respuesta es positiva, cuales ha notado ?</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm" v-model="form.pre4">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre4.$error">
              <p><span class="text-sm">* </span>Maximo 500 caracteres</p>
            </div>
          </div>

          <!-- 5 -->
          <div class="mb-3">
            <label for="" class="text-md">Que propuestas tendrias para mejorar la operatividad de la empresa ?</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm" v-model="form.pre5">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre5.$error">
              <p><span class="text-sm">* </span>Maximo 500 caracteres</p>
            </div>
          </div>

          <!-- 6 -->
          <div class="mb-3">
            <label for="" class="text-md">Que areas priorizarias y porque ?</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm" v-model="form.pre6">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre6.$error">
              <p><span class="text-sm">* </span>Maximo 500 caracteres</p>
            </div>
          </div>

          <!-- 7 -->
          <fieldset class="mb-3">
            <legend>Nos sigues en redes sociales como @Pescalba ?</legend>

            <div class="text-sm mt-1">
              <input type="radio" id="Excelente" name="pre7" value="si" v-model="form.pre7">
              <label for="huey">si</label>
            </div>

            <div class="text-sm">
              <input type="radio" id="Buena" name="pre7" value="no" v-model="form.pre7">
              <label for="dewey">no</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre7.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 8 -->
          <fieldset class="mb-3">
            
            <legend>En caso de seguirnos, interactuas con nuestro contenido ?</legend>

            <div class="text-sm mt-1">
              <input type="radio" name="pregunta8" value="si" v-model="form.pre8">
              <label>si</label>
            </div>

            <div class="text-sm">
              <input type="radio" name="pregunta8" value="no" v-model="form.pre8">
              <label>no</label>
            </div>

            <div class="text-sm">
              <input type="radio" name="pregunta8" value="casi nunca" v-model="form.pre8">
              <label>casi nunca </label>
            </div>

            <div class="text-sm">
              <input type="radio" name="pregunta8" value="nunca" v-model="form.pre8">
              <label>nunca</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre8.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 9 -->
          <fieldset class="mb-3">

            <legend>En caso de seguirnos, interactuas con nuestro contenido ?</legend>

            <div class="text-sm mt-1">
              <input type="radio" name="pregunta9" value="si" v-model="form.pre9">
              <label>si</label>
            </div>

            <div class="text-sm">
              <input type="radio" name="pregunta9" value="no" v-model="form.pre9">
              <label>no</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre9.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 10 -->
          <fieldset class="mb-3">

            <legend>¿Estarías dispuesto a participar en nuestras redes sociales (Videos, fotos y contenido en general)?</legend>

            <div class="text-sm mt-1">
              <input type="radio" name="pregunta10" value="si" v-model="form.pre10">
              <label>si</label>
            </div>

            <div class="text-sm">
              <input type="radio" name="pregunta10" value="no" v-model="form.pre10">
              <label>no</label>
            </div>

            <div class="text-xs mt-2 text-red-300" v-if="v$.pre10.$error">
              <p><span class="text-sm">* </span>Debes completar este campo</p>
            </div>

          </fieldset>

          <!-- 11 -->
          <div class="mb-3">
            <label for="" class="text-md">¿Conoce cuál es la importancia de la proyección de la empresa para su operatividad y avance?</label>
            <textarea class="w-full border border-slate-300 focus:outline-slate-300 mt-2 p-2 text-sm" v-model="form.pre11">
            </textarea>

            <div class="text-xs mt-1 text-red-300" v-if="v$.pre11.$error">
              <p><span class="text-sm">* </span>Maximo 500 caracteres</p>
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
