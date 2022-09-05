<template>
  <div class="flex flex-col items-center justify-center min-h-full bg-primary">
    <img src="@/assets/icons/logo.svg" alt="central +" class="pointer">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg lg:w-2/6">
        <h3 class="text-2xl font-bold text-center text-primary">Iniciar sesión</h3>
        <form @submit.prevent="sendForm">
            <div class="mt-4">
                <div>
                    <label class="block" for="user">Nombre de usuario</label>
                            <input type="text" placeholder="Nombre de usuario" v-model="user.nickName"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                  <label class="block">Contraseña</label>
                            <input type="password" placeholder="Contraseña" v-model="user.password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>      
                <span v-if="errorlogin" class="text-xs tracking-wide text-red-600 block text-center mt-5">Usuario o Contraseña incorrectos </span>
                <div class="flex items-baseline justify-between">
                    <button 
                      class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full">Entrar</button>
                </div>
            </div>
        </form>
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
    console.log(data);

    if(status){
      Toast.fire({ icon: 'success', title: 'Sesion Iniciada'});
      router.push({name:'techHome'});
    }else{
      Toast.fire({ icon: 'error', title: 'No se ha podido iniciar Sesion'});
      errorlogin.value = true;
    }
  }
</script>

<style>

</style>