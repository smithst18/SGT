import { Router } from "express";

import { surveyController } from "../controllers";

import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";

//validations 
import { validSurvey, validSurveyId } from "../validators/surveyVal";


const router = Router();

router.post('/save',authMiddleware, validSurvey, surveyController.save);
router.get('/getOne',authMiddleware, validSurveyId, surveyController.findOne);
router.get('/getAll',authMiddleware, surveyController.findAll);

export default router;