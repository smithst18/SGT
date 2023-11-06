<script setup lang='ts'>
    import { defineAsyncComponent } from 'vue';
    const ManagUserCard = defineAsyncComponent(() => import('@/modules/users/components/ManagUserCard.vue'));

    const users = [
        {}
    ]
</script>

<template>
    <div class="border w-full h-full border-orange-600">
        <div class="w-full h-[15%] grid grid-cols-4 border border-red-600">
            <div class="col-span-1 border">

                <p class="flex items-center justify-center h-full">
                    <span class="material-symbols-outlined text-3xl mr-2">
                        person
                    </span>
                    Perfil
                </p>
            </div>
            <div class="col-span-1 border">
                <p class="flex items-center justify-center h-full">
                    <span class="material-symbols-outlined text-3xl mr-2">
                        person_book
                    </span>
                    Nombre
                </p>
            </div>
            <div class="col-span-1 border">
                <p class="flex items-center justify-center h-full">
                    <span class="material-symbols-outlined text-3xl mr-2">
                        user_attributes
                    </span>
                    Rol
                </p>
            </div>
            <div class="col-span-1 border">
                <p class="flex items-center justify-center h-full">
                    <span class="material-symbols-outlined text-3xl mr-2">
                        schedule
                    </span>
                    Status
                </p>
            </div>
        </div>
        <div class="w-full h-[85%] overflow-y-auto border border-purple-500"> 
            <ManagUserCard rol="tecnico"/>
        </div>
    </div>
</template>

<style scoped lang='scss'>

</style>