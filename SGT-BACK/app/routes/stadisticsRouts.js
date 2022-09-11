import { Router } from "express";

import { stadisticController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//validations 
// import { validPosition, validId } from "../middlewares/validators/positionVal";

const router = Router();

router.get('/general-stadistics',authMiddleware, stadisticController.general);

export default router;