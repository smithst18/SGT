import { Router } from "express";

import { positionController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//validations 
import { validPosition } from "../middlewares/validators/positionVal";

const router = Router();

router.post('/save-position',authMiddleware,validPosition,positionController.savePosition);

export default router;