<template>
  <div class="w-full h-full border border-cyan-900 p-5">
    <h3 class="text-primary uppercase tracking-wide text-md font-bold mb-2">Tickets pendientes</h3>
    <PendingItems  :data="soportes[0]"/>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from '@vue/runtime-core';
const PendingItems = defineAsyncComponent(() => import("../components/PendingItems.vue"));

const soportes = [
        {id:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"1",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"2",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"3",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"4",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"5",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"6",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"7",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"8",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"9",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"10",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"11",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"12",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"13",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"14",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"15",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"16",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"17",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"18",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"19",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"20",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"21",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"22",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"23",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"24",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"25",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"26",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"27",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"28",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"29",item:"computador",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"30",item:"teclado",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"31",item:"pantalla",tipo:"hardware",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
        {id:"32",item:"S.O",tipo:"Software",solicitante:"maria benites",detalles:"asdkjaljsdkasdlaslkjdlaksdlkasjdkl"},
];

</script>

<style>

</style>