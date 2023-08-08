<script setup lang='ts'>
import SearchingBar from "@/components/commons/SearchBar.vue";
import PaginationBar from "@/components/table/PaginationBar.vue"
    const searchData = (event:string) => { 
        console.log(event);
    }
</script>

<template>
    <div class="w-full h-full">
        <div class="w-full h-full hidden md:block shadow-md rounded-md p-2">
            <!-- head of the table-->
            <div class="flex mt-2">
                <p class="text-lg font-semibold">Historial de Tickets</p>
                <SearchingBar @on-search-data="searchData($event)" class="flex ml-auto my-5"/>
            </div>
            <!-- body for the table -->
            <div class="w-full h-[70%] overflow-auto">

                <table class="table-fixed  w-full text-sm border-collapse relative">
                    <!-- <caption class="caption-bottom">
                        Table 3.1: Professional wrestlers and their signature moves.
                    </caption> -->
                    <thead class="bg-gray-50 border-gray-200 sticky top-0 drop-shadow-sm">
                        <tr class="">
                            <th class="p-3 text-sm font-semibold opacity-75 tracking-wide capitalize text-left">campo 1</th>
                            <th class="p-3 text-sm font-semibold opacity-75 tracking-wide capitalize text-left">campo 2</th>
                            <th class="p-3 text-sm font-semibold opacity-75 tracking-wide capitalize text-left">campo 3</th>
                            <th class="p-3 text-sm font-semibold opacity-75 tracking-wide capitalize text-left">campo 3</th>
                        </tr>
                    </thead>

                    <tbody class="">
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdasdasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">asdkjajkdkjasasdasd</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                            <td class="p-3 text-sm text-third capitalize text-left whitespace-nowrap overflow-x-auto">dasdsa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--pagination component-->
            <div class="border-t-2 mt-2 border w-full h-10">
                <PaginationBar :pages="5" :elements-per-page="5" :results="15"/>
            </div>
        </div>
        
        <!-- tabla para mobiles ETC -->
        <div class="grid grid-cols-1 gap-4 md:hidden border">
            <div class="bg-white p-4 rounded-lg shadow text-xs">
                <div class="grid grid-cols-2 items-center">
                    <div class="">contenido</div>
                    <div class="">contenido</div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<style scoped lang="scss">
table tbody tr td:first-child {
    @apply cursor-pointer hover:text-primary-light font-semibold;
}
thead {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar{
    @apply bg-secondary w-2
}
td::-webkit-scrollbar{
    @apply hidden
}
::-webkit-scrollbar-thumb{
    @apply bg-primary-light w-2 rounded-md
}
</style>