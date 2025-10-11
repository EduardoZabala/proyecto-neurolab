import { Router } from "express";
import { UsersController } from "../controllers/usersController";
import { AuthController } from "../controllers/authController";
export const router = Router();


router.use('/users',UsersController);
router.use('/auth',AuthController);





