import { Router } from "express";

import { ticketController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";

const router = Router();

router.get('/save-ticket',ticketController.save);

export default router;