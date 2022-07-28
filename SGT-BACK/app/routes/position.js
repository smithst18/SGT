import { Router } from "express";

import { positionController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";

const router = Router();

router.get('/save-position',positionController.savePosition);

export default router;