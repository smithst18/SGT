import multer from 'multer';
import { extname } from 'path';

const mimetypes = ["image/jpeg","image/png","image/svg","image/jpeg"];
//configuracion del storage de multer
const storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../public/images`;
    cb(null, pathStorage);
  },

  filename: function (req, file, cb) {
    const userId = req.body.id;

    const extension = extname(file.originalname);

    const fileName = `profilePic-${userId}${extension}`;

    cb(null, fileName);
  }
});

//esta constate contiene las funciones para leer archivos
export const upload = multer();
//esta constate contiene las funciones de multer y el storage para guardar de manera local
export const uploadWithStorage = multer({
  storage,
  fileFilter: (req,file,cb) =>{
    if(mimetypes.includes(file.mimetype)) cb(null,true);
    else {
      cb(null,false);
      //setear propiedad en la req para archivo invalido
      req.invalidFile = `archivo debe ser de formato : ${ mimetypes.join() }`;
    }
  }, 
  limits:{
    fileSize: 1000000,
  }
});

