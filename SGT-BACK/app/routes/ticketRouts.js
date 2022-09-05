import { Router } from "express";
//controllers
import { ticketController } from "../controllers";
//middlewares
import { sesionAuth as authMiddleware } from "../middlewares/jwtAuth";
import { authRol as authRolMiddleware  } from "../middlewares/authRol";
//valiations
import { validTicket, validTakeTicket, validTicketId } from '../middlewares/validators/ticketVal';
import { validUserId } from '../middlewares/validators/userVal';

const router = Router();

router.post('/save-ticket', authMiddleware, validTicket,ticketController.save);
router.get('/pending-tickets', authMiddleware, ticketController.getPendingTickets);
router.get('/pending-tickets-byId', authMiddleware,validUserId, ticketController.getPendingTicketsById);
router.get('/take-pending', authMiddleware, validTakeTicket, ticketController.takeTicket);
router.get('/return-pending', authMiddleware, validTicketId, ticketController.returnTicket);
router.get('/get-current', authMiddleware, validUserId, ticketController.getCurrentTicket);
router.get('/close-ticket', authMiddleware, validTicketId, ticketController.closeTicket);
router.get('/closed-tickets-by-tech', authMiddleware, validUserId, ticketController.closedTicketsByTech);
router.delete('/delete-ticket/:ticketId', authMiddleware, validTicketId, ticketController.deleteTicket);

export default router;