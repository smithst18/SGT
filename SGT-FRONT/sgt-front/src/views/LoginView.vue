<template>
  <div class="flex items-center justify-center min-h-full bg-gray-100 border">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg border lg:w-2/6">
        <h3 class="text-2xl font-bold text-center">Iniciar sesión</h3>
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

  import { ref } from "@vue/reactivity";
  import { useMainStore } from "../stores/mainStore.js";

  const errorlogin = ref(false);

  const mainStore = useMainStore();

  const user = ref({
    nickName:'admin',
    password:'asdasd'
  });

  const sendForm = async () =>{
    
    const session = await mainStore.logIn(user.value);
    console.log(session);
  }
</script>

<style>

</style>