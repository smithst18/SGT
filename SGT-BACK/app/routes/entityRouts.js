import { Router } from "express";

import { entityController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//validations
import { validEntity } from '../validators/entity';

const router = Router();

router.post('/save-entity',authMiddleware,validEntity,entityController.saveEntity);
router.get('/get-all',authMiddleware,entityController.getAllEntitys);
export default router;