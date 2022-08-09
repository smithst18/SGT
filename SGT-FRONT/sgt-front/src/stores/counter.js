import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('main', () => {
  const count = ref(0);

  const unaSctions  = () => {
    count.value++
  };
  
  const unGetter = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
  });

  return { count, unaSctions, unGetter }
})
