import { Router } from "express";
import { UsersController, PublicUsersController } from "../controllers/usersController";
import { AuthController } from "../controllers/authController";
export const router = Router();


router.use('/users',UsersController);
router.use('/auth',AuthController);
router.use('/auth',PublicUsersController);





