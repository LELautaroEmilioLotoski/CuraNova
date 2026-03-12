import { Router } from "express";
import { appointmentsGetController, appointmentsGetUserController, appointmentsPatchController, appointmentsPostController, appointmentsPutController } from "../controllers/appointmentsController";

const router = Router();

router.post("/createAppointment/:userId/:doctorId", appointmentsPostController);
router.get("/appointments", appointmentsGetController);
router.get("/appointments/:userId", appointmentsGetUserController);
router.put("/appointments/:appointmentId", appointmentsPutController);
router.patch("/appointments/:appointmentId/:userId", appointmentsPatchController);

export default router;