<script setup lang="ts">
  //IMPORT
  import { ref, reactive } from "vue";
  import { defineAsyncComponent } from "vue";
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';

  //COMPONENTS
  const MainSpiner = defineAsyncComponent(()=> import('@/components/commons/MainSpinner.vue'));
  const MainForm = defineAsyncComponent(() => import('@/components/form/MainForm.vue'));
  const InputField = defineAsyncComponent(() => import('@/components/form/InputField.vue'));
  const submitButton = defineAsyncComponent(() => import('@/components/commons/MainButton.vue'));

  //CONSTS
  const { values, errors, defineField, handleSubmit } = useForm({
    validationSchema: yup.object({
      ci: yup .string().required('Cedula de indentidad requerida'),
      password: yup.string().required('contraseña requerida').trim(),
    }),
  });
  const error = ref(false);
  const apiServerError = ref(false);

  const [ci] = defineField('ci');
  const [password] = defineField('password');
  const formData = reactive( { ci:'', password:'' } );
  const showPassword = ref(false);

  // FUNCTIONS
  const handleShowPassword = () => showPassword.value = !showPassword.value;
  

  const onSubmit = handleSubmit(async (values) => {

    alert("form enviado");
  });
</script>

<template>
    <div class="h-screen w-screen flex items-center justify-center" id="login"> 
    <div class="sm:w-full md:w-[50%] lg:w-[30%] sm: md: lg: bg-white flex flex-col justify-center items-center rounded shadow-xl">
      <!-- LOGO -->
      <div class="w-[50%] mx-auto">
        <img src="@/assets/imgs/arctic.webp" alt="SGTI logo" class="w-full h-auto">
      </div>
      <MainForm @submit="onSubmit" :cols="1"  id="form" class="w-full pt-2 pb-16 px-16 bg-white rounded-md">
        <template v-slot:content>
          <p class="text-center text-2xl text-primary my-8">Inicia sesión en tu cuenta </p>
          <InputField v-model="ci"  type="text" name="ci" autocomplete="username"  label="Cedula" :error="errors.ci"/>
          <InputField v-model="password" :type="showPassword ? 'text' : 'password'" name="password" autocomplete="current-password"  label="contraseña" :error="errors.password">
            <transition name="fade">
              <span 
                class="material-symbols-outlined absolute top-3 right-1 cursor-pointer text-primary" 
                @click="handleShowPassword"
                v-if="showPassword">
                visibility
              </span>
            </transition>
            <transition name="fade">
              <span 
                class="material-symbols-outlined absolute top-3 right-1 cursor-pointer text-primary" 
                @click="handleShowPassword"
                v-if="!showPassword">
                visibility_off
              </span>
            </transition>
          </InputField>
          <span class="text-sm text-green-400 text-opacity-90 text-center mb-3" >Sesion Iniciada</span>
          <span class="text-sm text-red-400 text-opacity-90 text-center" >Usuario o contraseña invalidos</span>
          <span class="text-sm text-red-400 text-opacity-90 text-center" >Error en la Conexion con Servidor</span>
          <submitButton :full-size="true" title="Iniciar Sesion" @click="onSubmit" class="mt-10 h-12">
            <MainSpiner class="ml-[-15px]"/>
          </submitButton>
        </template>
      </MainForm>
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