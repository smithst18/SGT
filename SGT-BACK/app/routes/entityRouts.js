import { Router } from "express";

import { entityController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";

const router = Router();

router.get('/save-entity',entityController.saveEntity);

export default router;