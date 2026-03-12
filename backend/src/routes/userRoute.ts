import { Router } from "express";
import { userGetController, userGetUserByIdController, userPutController } from "../controllers/userController";

const router = Router();

router.get("/users", userGetController);
router.get("/user/:userId", userGetUserByIdController);
router.put("/userUpdate/:userId", userPutController);

export default router;