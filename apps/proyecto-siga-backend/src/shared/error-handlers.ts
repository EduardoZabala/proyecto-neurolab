import { Request, Response, NextFunction } from "express";
import z, { ZodError, ZodTypeAny } from "zod";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { HttpError, ErrorCode } from "../utils/httpError";

export function handlePrismaError(error: any): HttpError {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        const field = error.meta?.target as string[];
        const fieldName = field?.[0] || "campo";
        return new HttpError(
          409,
          `Ya existe un registro con este ${fieldName}`,
          ErrorCode.CONFLICT
        );

      case "P2003":
        return new HttpError(
          400,
          "Referencia inválida: la entidad relacionada no existe",
          ErrorCode.BAD_REQUEST
        );

      case "P2025":
        return new HttpError(
          404,
          "Registro no encontrado",
          ErrorCode.NOT_FOUND
        );

      case "P2016":
        return new HttpError(
          400,
          "Error en la consulta",
          ErrorCode.BAD_REQUEST
        );

      default:
        console.error("Prisma error:", error);
        return new HttpError(500, "Error de base de datos", ErrorCode.INTERNAL);
    }
  }

  if (error instanceof PrismaClientValidationError) {
    return new HttpError(
      400,
      "Error de validación en base de datos",
      ErrorCode.BAD_REQUEST
    );
  }

  throw error;
}

export function handleZodError(error: ZodError): HttpError {
  const errors = error.issues.map((err) => ({
    field: err.path.join("."),
    message: err.message,
    code: err.code,
  }));

  return new HttpError(400, "Error de validación", ErrorCode.BAD_REQUEST, {
    validationErrors: errors,
  });
}

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let handledError: HttpError;

  try {
    if (error instanceof HttpError) {
      handledError = error;
    } else if (error instanceof ZodError) {
      handledError = handleZodError(error);
    } else if (error.name?.includes("Prisma")) {
      handledError = handlePrismaError(error);
    } else {
      console.error("Unhandled error:", error);
      handledError = new HttpError(
        500,
        "Error interno del servidor",
        ErrorCode.INTERNAL
      );
    }
  } catch (originalError) {
    console.error("Error handling failed:", originalError);
    handledError = new HttpError(
      500,
      "Error interno del servidor",
      ErrorCode.INTERNAL
    );
  }

  res.status(handledError.status).json({
    success: false,
    message: handledError.message,
    code: handledError.code,
    ...(handledError.details && { details: handledError.details }),
  });
}

export function asyncHandler<
  Req extends Request = Request,
  Res extends Response = Response,
  R = any
>(fn: (req: Req, res: Res, next: NextFunction) => Promise<R>) {
  return (req: Req, res: Res, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
}


export function validateBody<S extends ZodTypeAny>(schema: S) {
  return (
    req: Request<any, any, z.infer<S>>,
    _res: Response,
    next: NextFunction
  ) => {
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed as z.infer<S>;
      next();
    } catch (error) {
      next(error);
    }
  };
}

export function validateQuery<S extends ZodTypeAny>(schema: S) {
  return (
    req: Request<any, any, any, z.infer<S>>,
    _res: Response,
    next: NextFunction
  ) => {
    try {
      const parsed = schema.parse(req.query);
      req.query = parsed as unknown as z.infer<S>; 
      next();
    } catch (error) {
      next(error);
    }
  };
}

export function validateParams<S extends ZodTypeAny>(schema: S) {
  return (
    req: Request<z.infer<S>>,
    _res: Response,
    next: NextFunction
  ) => {
    try {
      const parsed = schema.parse(req.params);
      req.params = parsed as unknown as z.infer<S>;
      next();
    } catch (error) {
      next(error);
    }
  };
}