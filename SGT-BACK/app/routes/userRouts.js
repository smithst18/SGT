import { Router } from "express";
//controllers import
import { userController } from "../controllers";
//middlewares
import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//valiations
import { validCreateUser, validLogin } from '../middlewares/validators/user';

//express router instance
const router = Router();

//routes definition        //middleware
router.post('/login',validLogin,userController.login);
router.post('/register',validCreateUser,userController.saveUser);
router.get('/logout',authRolMiddleware('admin'),userController.logout);

export default router;