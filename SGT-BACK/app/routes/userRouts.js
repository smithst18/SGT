import { Router } from "express";
//controllers import
import { userController } from "../controllers";
//middlewares
import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
import { upload, uploadWithStorage } from "../middlewares/multer.js";
//valiations
import { validCreateUser, validLogin, validUpdate } from '../validators/userVal';
//express router instance
const router = Router();

//routes definition        //middleware
router.get('/list',authMiddleware,userController.userListChat);
router.post('/login',validLogin,userController.login);
router.post('/register',authMiddleware,validCreateUser,userController.saveUser);
router.post('/upload-file',authMiddleware,upload.single('file'),userController.saveWithFile);
router.put(
  '/update',//RUTA
  uploadWithStorage.single('profileIMG'),//MULTER
  validUpdate,//VALIDATOR
  userController.updateProfile//CONTROLLER
);

export default router;