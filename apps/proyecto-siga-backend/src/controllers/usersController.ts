import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import prisma from "@packages/libs/prisma";
import { auth, asAdminOrPsychologist, AuthedRequest } from "../middleware/auth";
import { wrap } from "../middleware/async";
import { ok } from "../utils/jsonResponse";
import { checkPassword } from "../security/passwordPolicy";
import {
  handleList,
  handleGetById,
  handleCreate,
  handleUpdate,
  findEntityById,
} from "../shared/crud-helpers";
// import { CommonDtos } from "../shared/validators";
import { ValidationError } from "../utils/httpError";

export const UsersController = Router();

// Apply auth middleware to all routes
UsersController.use(auth, asAdminOrPsychologist);

const roles = ["admin", "psychologist", "user"] as const;

// Validation schemas
const CreateUserDto = z.object({
  email: z
    .string()
    .min(3)
    .trim()
    .transform((s) => s.toLowerCase()),
  name: z.string().trim().optional().nullable(),
  password: z.string().min(1),
  role: z.enum(roles),
});

const UpdateUserDto = z.object({
  email: z
    .string()
    .min(3)
    .trim()
    .transform((s) => s.toLowerCase()),
  name: z.string().trim().optional().nullable(),
  role: z.enum(roles),
});

// Select fields for user responses
const selectFields = {
  id: true,
  email: true,
  name: true,
  role: true,
  isActive: true,
  createdAt: true,
  lastLogin: true,
};

// CRUD configuration
const userConfig = {
  model: prisma.user,
  entityName: "user",
  selectFields,
};

// Custom password validation and hashing functions
const validateAndHashPassword = async (password: string, email: string) => {
  const pwErrors = await checkPassword(password, email);
  if (pwErrors.length) {
    throw ValidationError("La contraseña debe tener minimo 6 caracteres", {details:pwErrors});
  }

  const rounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
  const saltRounds = Number.isFinite(rounds) && rounds > 0 ? rounds : 10;
  return bcrypt.hash(password, saltRounds);
};

// get users
UsersController.get(
  "/",
  wrap(async (req, res) => {
    return handleList(userConfig, req, res, {
      orderBy: { createdAt: "desc" },
    });
  })
);
// create a new user
UsersController.post(
  "/",
  wrap(async (req: AuthedRequest, res) => {
    return handleCreate(userConfig, req, res, CreateUserDto, {
      beforeCreate: async (data) => {
        const passwordHash = await validateAndHashPassword(
          data.password,
          data.email
        );
        const { password, ...createData } = data;
        return { ...createData, passwordHash };
      },
    });
  })
);
// get user by id
UsersController.get(
  "/:id",
  wrap(async (req, res) => {
    return handleGetById(userConfig, req, res);
  })
);

// update user by id
UsersController.put(
  "/:id",
  wrap(async (req: AuthedRequest, res) => {
    return handleUpdate(userConfig, req, res, UpdateUserDto);
  })
);

UsersController.patch(
  "/:id/deactivate",
  wrap(async (req, res) => {
    const { id } = req.params;

    const user = (await findEntityById(userConfig, id)) as any;

    if (!user.isActive) {
      throw ValidationError("El usuario ya está desactivado");
    }

    await prisma.$transaction(async (tx: typeof prisma) => {

      await tx.user.update({
        where: { userId: id },
        data: {
          isActive: false,
        },
      });
      await tx.refreshToken.updateMany({
        where: { 
          userId: id,
          revokedAt: null, 
        },
        data: { revokedAt: new Date() },
      });
    });

    return ok(res, null, "Usuario desactivado con éxito");
  })
);

UsersController.patch(
  "/:id/activate",
  wrap(async (req, res) => {
    const { id } = req.params;

    const user = (await findEntityById(userConfig, id)) as any;

    if (user.isActive) {
      return ValidationError("El usuario ya está activo");
    }

    await prisma.user.update({
      where: { id },
      data: { isActive: true },
    });

    return ok(res, null, "Usuario activado con éxito");
  })
);
