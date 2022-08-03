import { Router } from "express";
//controllers
import { ticketController } from "../controllers";
//middlewares
import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//valiations
import { validTicket } from '../middlewares/validators/ticketVal';


const router = Router();

router.post('/save-ticket',authMiddleware,validTicket,ticketController.save);
router.get('/get-tickets',ticketController.getTickets);

export default router;