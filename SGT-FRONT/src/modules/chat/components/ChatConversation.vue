<template>
  <div class="w-full h-full">

    <div class="h-[90%]" v-if="mainStore.getCurrentChat && mainStore.getCurrentChat.messages.length >= 1">
      <div ref="chatBoxRef" class="w-full h-full overflow-y-auto scrollbar px-10 py-4 bg-slate-100">
        <div 
          v-for="mesage in mainStore.getCurrentChat.messages" 
          :key="mesage" 
          class="flex my-2 max-w-xs"
          :class="[ mesage.user == mainStore.logedUser.id ? 'ml-auto' : '' ]">
          <p :class="[ mesage.user == mainStore.logedUser.id ? 'sended' : 'received' ]" class="bubble text-sm">
            {{mesage.text}}
            <span class="block text-end text-xs">{{ formatedDate(mesage.time) }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="h-[90%]" v-else>
      <div class="w-full h-full px-10 py-4 bg-slate-100">
        <div class="flex h-full">
          <p class="text-slate-400 w-full m-auto text-center">Iniciar Conversacion... </p>
        </div>
      </div>
    </div>

    <!-- caja para escribir -->
    <div class="h-[10%] border-t">
      <form class="h-full flex" @submit.prevent="submitForm"> 
        <input 
        v-model="form.text"
        :disabled="!allowChat"
        ref="msgRef"
        @blur="onBlur"
        type="text" class="w-[90%] m-2 rounded bg-gray-200 text-sm text-slate-600 focus:outline-none placeholder:italic placeholder:text-slate-400 placeholder:ml-2 py-2 pl-9 pr-3" placeholder="enviar mensaje">
        <button type="submit" class="w-[10%] enter-btn">
          <font-awesome-icon :icon="['fa','arrow-turn-right']" class="text-primary h-6 w-6 m-auto"/>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted, onUpdated } from "@vue/runtime-core";
import { useMainStore } from '../../../stores/mainStore';
import moment from "moment";
import { useFormValidator } from "@/composables/useFormValidator.js";
import { minLength, required } from "@vuelidate/validators";

const mainStore = useMainStore();
const emit = defineEmits(["privateMsg"]);
const props = defineProps({
  allowChat:{
    type:Boolean,
    required:true,
  }
});
/******************************** STATE  *******************************************/

//DOM REFS
const msgRef = ref(null);
const chatBoxRef = ref(null);

//STATE
const msg = {
  user: mainStore.logedUser.id,
  text:'',
  time:'',
};
const validations = {
  text:{ 
    required,
    minLength: minLength(1),
  },
};
const { form, resetForm, validateForm } = useFormValidator(msg, validations); 
/******************************** COMPUTED PROPERTYS  *******************************************/

const formatedDate = computed(() => (fecha) =>{
  return moment(fecha,'MMMM Do YYYY, h:mm a').format('h:mm a');
})
/********************************  METHODS *****************************************/

const submitForm = async () => {
  const valid  = await validateForm();

  if(valid) {
    form.time = moment(Date.now()).format('MMMM Do YYYY, h:mm a');
    emit('privateMsg',form);
    resetForm();
  };
};

const scrollToEnd = () =>{
  if(chatBoxRef.value){
    let scrollHeight = chatBoxRef.value.scrollHeight
    chatBoxRef.value.scrollTop = scrollHeight;
  };
}
//devolver el focus al input al clickear el botton 
const onBlur = (evt) => {
    if (evt.relatedTarget && evt.relatedTarget.classList.contains("enter-btn")) msgRef.value.focus();
};

/********************************  LIFECYCLES HOOKS *********************************/
//al entrar al componente poner focus al input para ingresar texto 
onMounted(() =>{
  msgRef.value.focus();
});
onUpdated(() => { 
  msgRef.value.focus(); 
  scrollToEnd();  
});
</script>

<style scoped>
.bubble{
  @apply px-5 py-2 max-w-fit rounded shadow-md text-justify text-sm
}
.sended{
  @apply text-white bg-primary relative ml-auto
}
.sended::before{
  content: '';
  width: 20px; 
  height: 20px;
  background-color: inherit;
  right: -10px;
  position: absolute;
  transform: rotate(45deg); 
  top: 50%; 
  margin-top: -5px;
}
.received{
  @apply text-white bg-gray-400 relative
}
.received::before{
  content: '';
  width: 20px; 
  height: 20px;
  background-color: inherit;
  left: -10px;
  position: absolute;
  transform: rotate(45deg); 
  top: 50%; 
  margin-top: -5px;
}
</style>