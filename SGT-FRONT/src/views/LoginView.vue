<template>
  <div class="flex min-h-full">
    <div class="w-1/2 img-background bg-no-repeat bg-cover"></div>
    <div class="w-1/2 p-10">

      <img src="@/assets/imgs/logo.png" alt="central +" class="pointer mx-auto mb-10">

      <div class="px-8 py-6 mt-4 text-left lg:w-full">
          <h3 class="text-2xl text-center text-primary mb-5">Login</h3>
          <form @submit.prevent="sendForm" id="form">
            <div class="relative z-0 w-full mb-10">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                v-model="user.nickName"
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary border-gray-200"
              />
              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre de usuario</label>
            </div>

            <div class="relative z-0 w-full mb-10">
              <input
                type="password"
                name="name"
                required
                placeholder=" "
                v-model="user.password"
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-primary border-gray-200"
              />
              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Contraseña</label>
            </div>

            <div class="text-center">
              <span 
              class="text-sm text-center text-red-600" 
              id="error"
              v-show="errorlogin">
                Usuario / Contraseña invalidos
              </span>
            </div>
            
            <button 
              type="submit"
              class="px-6 py-2 mt-4 text-white bg-primary rounded-sm hover:bg-slate-500 w-full">
              Iniciar Sesion
            </button>
          </form>
      </div>

    </div>
    
  </div>
</template>
<script setup>
  import { watch, inject, reactive, ref } from "vue";
  import { useMainStore } from "../stores/mainStore.js";
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const mainStore = useMainStore();
  const swal = inject('$swal');
  
  const user = reactive({
    nickName:'',
    password:''
  });
  //toast de sweet alert
  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    // didOpen: (toast) => {
      //   toast.addEventListener('mouseenter', swal.stopTimer)
      //   toast.addEventListener('mouseleave', swal.resumeTimer)
    // }
  })
  
  const errorlogin = ref(false);
  //watcher to hide the error
  watch(user, () => { if(errorlogin) errorlogin.value = false });

  const sendForm = async () =>{
    
    const { data, status } = await mainStore.logIn(user);

    if(status){
      Toast.fire({ icon: 'success', title: 'Sesion Iniciada'});
      router.push({ name:'techHome' });
    }else{
      Toast.fire({ icon: 'error', title: 'No se ha podido iniciar Sesion' });
      errorlogin.value = true;
    }
  }
</script>

<style scoped>
.img-background{
  background-image: url("src/assets/imgs/img-logIn.jpg");
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