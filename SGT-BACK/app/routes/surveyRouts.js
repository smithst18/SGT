import { Router } from "express";

import { surveyController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";

//validations 
import { validSurvey } from "../validators/surveyVal";


const router = Router();

router.post('/save',authMiddleware, validSurvey, surveyController.save);

export default router;