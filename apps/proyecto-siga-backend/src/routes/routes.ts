import { Router } from "express";
import { UsersController } from "../controllers/usersController";
export const router = Router();


router.use('/users',UsersController);





