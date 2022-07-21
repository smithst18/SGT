import { Router } from "express";
//controllers import
import { userController } from "../controllers";

//valiations
import { validCreateUser, validLogin } from '../middlewares/validators/user';

//express router instance
const router = Router();

//routes definition        //middleware
router.post('/login',validLogin,userController.login);
router.post('/register',validCreateUser,userController.saveUser);
router.get('/logout',userController.logout);

export default router;