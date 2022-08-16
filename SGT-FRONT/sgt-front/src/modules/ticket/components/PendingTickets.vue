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
    const TicketTable = defineAsyncComponent(() => import('../../../components/DataTable.vue'));

    // cambiar data estatica por data reactiva
    const data = [
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"correcto",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {estado:"incorrecto",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
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