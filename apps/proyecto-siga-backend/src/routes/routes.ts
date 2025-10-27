import { Router } from "express";
import { UsersController, PublicUsersController } from "../controllers/usersController";
import { AuthController } from "../controllers/authController";
import {TestsController} from "../controllers/testsController"
export const router = Router();

// privates routes
router.use('/users',UsersController);
router.use('/auth',AuthController);
router.use('/tests',TestsController);

// public routes
router.use('/public/users', PublicUsersController)




