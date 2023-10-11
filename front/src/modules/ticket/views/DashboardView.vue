<script setup lang="ts">

import { defineAsyncComponent } from "vue";
const ticketInfoCard = defineAsyncComponent(() => import('@/components/commons/InfoCard.vue'));
const DataTable = defineAsyncComponent(() => import('@/components/table/DataTable.vue'));

const elementos = [
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    {
      "nombre": "Juan",
      "edad": 25,
      "pais": "España",
      "numero_random": 987654
    },
    {
      "nombre": "María",
      "edad": 32,
      "pais": "México",
      "numero_random": 123456
    },
    {
      "nombre": "Carlos",
      "edad": 45,
      "pais": "Argentina",
      "numero_random": 789012
    },
    {
      "nombre": "Ana",
      "edad": 28,
      "pais": "Colombia",
      "numero_random": 345678
    },
    {
      "nombre": "Pedro",
      "edad": 37,
      "pais": "Perú",
      "numero_random": 901234
    },
    {
      "nombre": "Laura",
      "edad": 31,
      "pais": "Chile",
      "numero_random": 567890
    },
    {
      "nombre": "Diego",
      "edad": 29,
      "pais": "España",
      "numero_random": 234567
    },
    {
      "nombre": "Sofía",
      "edad": 26,
      "pais": "México",
      "numero_random": 890123
    },
    {
      "nombre": "Andrés",
      "edad": 42,
      "pais": "Argentina",
      "numero_random": 456789
    },
    {
      "nombre": "Valentina",
      "edad": 33,
      "pais": "Colombia",
      "numero_random": 656565
    },
    {
      "nombre": "Luis",
      "edad": 39,
      "pais": "Perú",
      "numero_random": 678901
    },
    {
      "nombre": "Carolina",
      "edad": 27,
      "pais": "Chile",
      "numero_random": 345678
    },
    {
      "nombre": "Javier",
      "edad": 36,
      "pais": "España",
      "numero_random": 901234
    },
    {
      "nombre": "Fernanda",
      "edad": 30,
      "pais": "México",
      "numero_random": 567890
    },
    {
      "nombre": "Gabriel",
      "edad": 43,
      "pais": "Argentina",
      "numero_random": 234567
    },
    {
      "nombre": "Marcela",
      "edad": 35,
      "pais": "Colombia",
      "numero_random": 890123
    },
    {
      "nombre": "Ricardo",
      "edad": 41,
      "pais": "Perú",
      "numero_random": 456789
    },
    {
      "nombre": "Isabella",
      "edad": 34,
      "pais": "Chile",
      "numero_random": 123456
    },
    {
      "nombre": "Pablo",
      "edad": 38,
      "pais": "España",
      "numero_random": 678901
    },
    {
      "nombre": "Camila",
      "edad": 29,
      "pais": "México",
      "numero_random": 345678
    },
    
];
const showPickedElement = (event:Event) =>{
    console.log(event)
}
</script>

<template>
    <div class="w-full h-full">
        <div class="flex items-center justify-around w-full h-1/3">
            <ticketInfoCard title="Tickets Cerrados" :porcentValue="32"  :percentage="null" src-img="../../src/assets/icons/logout.svg"/>
            <ticketInfoCard title="Tickets Abiertos"  :porcentValue="45" :percentage="null" src-img="../../src/assets/icons/logout.svg"/>
            <ticketInfoCard title="Tickets Completados" :porcentValue="75" percentage="%" src-img="../../src/assets/icons/logout.svg"/>
        </div>
       <div class="w-full h-2/3 px-5 py-2 ">
            <DataTable  :data="elementos" :titles="['nombre','edad','pais','random']" :elements-per-page="10"  @picked-element="showPickedElement"/>
       </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>
