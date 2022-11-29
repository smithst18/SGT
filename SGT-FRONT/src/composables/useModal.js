import { ref } from '@vue/reactivity';

export const useModal= () => {

  const showModal = ref(false);

  return {   
    showModal,
    toggleModal:() => showModal.value = !showModal.value,
  }
}