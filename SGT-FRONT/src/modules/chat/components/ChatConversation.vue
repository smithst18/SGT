<template>
  <div class="w-full h-full">
    <!-- caja paravisualizar chat -->
    <div class="h-[90%]">
      <div class="w-full h-full overflow-y-auto scrollbar px-10 py-4 bg-slate-100">
        <div v-for="msg in mensajes" :key="msg" class="flex my-2">
          <p :class="[ msg.user == 1 ? 'sended' : 'received' ]" class="bubble text-sm">
            {{msg.text}}
            <span class="block text-end text-xs">7:45 pm</span>
          </p>
        </div>
      </div>
    </div>
    <!-- caja para escribir -->
    <div class="h-[10%] border-t">
      <form class="h-full flex"> 
        <input type="text" class="w-[90%] m-2 rounded bg-gray-200 text-sm text-slate-600 focus:outline-none placeholder:italic placeholder:text-slate-400 placeholder:ml-2 py-2 pl-9 pr-3" placeholder="enviar mensaje">
        <button type="submit" class="w-[10%]">
          <font-awesome-icon :icon="['fa','arrow-turn-right']" class="text-primary h-6 w-6 m-auto"/>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>

const mensajes= [
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'ok'},
  {user:"1",text:'muchas gracias'},
  {user:"2",text:':)'},
  {user:"1",text:'subeme el sueldo'},
  {user:"2",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis officiis commodi nisi nihil aut, non voluptate ipsa quam alias exercitationem, quo doloremque incidunt? Nemo blanditiis odit eveniet culpa suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad soluta magni dolorum natus. Molestiae nihil nulla, culpa eum quis consectetur possimus reprehenderit explicabo minus incidunt hic, aut voluptate tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, placeat at voluptas animi laborum ipsam. Voluptatibus ea ullam veniam culpa, quos sunt soluta quae temporibus placeat iusto et, deleniti distinctio.'},
  {user:"1",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis officiis commodi nisi nihil aut, non voluptate ipsa quam alias exercitationem, quo doloremque incidunt? Nemo blanditiis odit eveniet culpa suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad soluta magni dolorum natus. Molestiae nihil nulla, culpa eum quis consectetur possimus reprehenderit explicabo minus incidunt hic, aut voluptate tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, placeat at voluptas animi laborum ipsam. Voluptatibus ea ullam veniam culpa, quos sunt soluta quae temporibus placeat iusto et, deleniti distinctio."},
  {user:"2",text:':)'}
]
</script>

<style scoped>
.bubble{
  @apply px-5 py-2 max-w-xs rounded shadow-md text-justify
}
.sended{
  @apply text-white bg-primary ml-auto relative
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