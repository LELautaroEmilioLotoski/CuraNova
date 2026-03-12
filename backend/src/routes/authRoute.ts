import { Router } from "express";
import { authPostDoctorController, authPostLoginController, authPostRegisterController } from "../controllers/authController";

const router = Router();

router.post("/register", authPostRegisterController);
router.post("/login", authPostLoginController);
router.post("/doctor", authPostDoctorController); 


export default router;