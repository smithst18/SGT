import { Router } from "express";
//controllers import
import { userController } from "../controllers";
//middlewares
import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
import { uploadFile } from "../middlewares/multer.js";
//valiations
import { validCreateUser, validLogin, validUpdate } from '../validators/userVal';
//express router instance
const router = Router();

//routes definition        //middleware
router.post('/login',validLogin,userController.login);
router.post('/register',authMiddleware,validCreateUser,userController.saveUser);
router.put('/update',uploadFile.single('profileIMG'),validUpdate,userController.updateProfile);

export default router;