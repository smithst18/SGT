<template>
  <div class="w-full h-full">
    <!-- caja paravisualizar chat -->
    <div class="border h-[90%] p-10">
      <div class="border border-gray-400 w-full h-full">
        
      </div>
    </div>
    <!-- caja para escribir -->
    <div class="border h-[10%]">
      <form class="border h-full flex"> 
        <input type="text" class="w-[90%] m-2 rounded bg-gray-200 text-sm text-slate-600 focus:outline-none placeholder:italic placeholder:text-slate-400 placeholder:ml-2 py-2 pl-9 pr-3" placeholder="enviar mensaje">
        <button type="submit" class="border boder-gray-400 w-[10%]">
          <font-awesome-icon :icon="['fa','arrow-turn-right']" class="text-primary h-6 w-6 m-auto"/>
        </button>
      </form>
    </div>
  </div>

</template>

<script setup>

const mensajes= [
  {user:"1",msg:'subeme el sueldo'},
  {user:"2",msg:'ok'},
  {user:"1",msg:'muchas gracias'},
  {user:"2",msg:':)'},
]
</script>

<style>

</style>