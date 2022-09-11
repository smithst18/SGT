import { Router } from "express";

import { positionController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//validations 
import { validPosition, validId } from "../middlewares/validators/positionVal";

const router = Router();

router.post('/save-position',authMiddleware, validPosition, positionController.savePosition);
router.get('/get-positions',authMiddleware, validId, positionController.getPositions);

export default router;