<template>
    <!-- volver la tabla reactiva los th y los td -->
    <table class="w-full">
        <thead>
            <tr>
                <th>Estado</th>
                <th>Item</th>
                <th>Tipo</th>
                <th>Solicitante</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody class="text-center ">
            <tr class="">
                <td>pc</td>
                <td>Hardware</td>
                <td>true</td>
                <td>Usuario</td>
                <td class="text-ellipsis overflow-hidden h-9 w-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, accusamus, hic nisi itaque error nostrum eius ducimus molestias, minus officiis aspernatur voluptates vero! Quae iure harum laborum. Tempore, dolor quia!

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
</style>