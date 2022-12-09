import { reactive } from '@vue/reactivity';
import { onMounted } from 'vue';
export const useImgs = () => {

  const imgSrc = reactive({});

  const availableTypes = ['jpg','png','svg'];

  //transform img to url
  // const transformImgToUrl = (file) => {
  //   let reader = new FileReader();
  //   reader.onload = (e) => imgSrc.value = e.target.result;
  //   reader.readAsDataURL(file);
  // };


  //validar imag
  const validateImg = (file) =>{
    
    // separar el sub estring del formato y buscar si es valido
    const { type, size } = file;
    const validFile = availableTypes.indexOf( type.substring( type.lastIndexOf('/') + 1 ) );
    
    // si el formato es correcto se tranforma el archivo a una url valida
    if(validFile == -1) 
    {
      imgSrc.value = {};
      return false;
    }
    else {
      imgSrc.value = file;
      return true
    }
      //{
    //   // transformImgToUrl(file);
    //   return true;
    // };
  };

  return { imgSrc, validateImg }
}