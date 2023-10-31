import { ref } from "vue";

export const useModal = (modal:boolean) => {
  
const showModal = ref(modal);

    return {
        showModal,
        showModalAction: () => showModal.value = !showModal.value,
    };
};