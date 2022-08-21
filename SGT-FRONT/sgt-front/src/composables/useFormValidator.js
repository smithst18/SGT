import { reactive } from '@vue/reactivity';
import useVuelidate from '@vuelidate/core';
import { computed, inject } from 'vue';
import { sameAs } from '@vuelidate/validators';

export const useFormValidator = (initialValue,validations,message) => {

  const form = reactive({...initialValue});

  const rules = computed(() => {
    const localRules = {...validations};

    if(form.repassword){
      localRules.repassword = { samePassword: sameAs(form.password) }
    }

    return localRules;
  });

  const v$ = useVuelidate(rules,form);

  const validateForm = async () => {

    const isvalidForm = await v$.value.$validate();
  
    if(!isvalidForm) return;
    else{
      //object initial state
      Object.assign(form,initialValue);
      //validations reset form 
      v$.value.$reset();
      return true;
    }
  } 

  return { 
    form,
    v$,
    validateForm,
  }
}
/** */