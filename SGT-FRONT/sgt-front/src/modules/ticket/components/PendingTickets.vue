<template>
    <div class="p-8 h-full border-cyan-200">
        <h3 class="text-primary text-lg mb-6"> Mis Soportes</h3>
        <div class="border border-cyan-200 p-2 h-[90%]">
            <!-- pasarle la data de los ticket a la tabla  -->
            <div class="h-full">
                <TicketTable v-bind="tableOptions"/>
            </div>
        </div>
        <!-- crear un modal para los detalles -->
    </div>  
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable/DataTable.vue'));

    // cambiar data estatica por data reactiva
    const data = [
        {estado:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
    ];
    const tableOptions = {
        theadTitles:[
            "Estado",
            "Item",
            "Tipo",
            "Solicitante",
            "Detalles",
        ],
        dataBody:data,
        showPagination: true,
        elementsPerPage:10
    }
</script>

<style scoped>

</style>