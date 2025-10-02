import { Request, Response } from "express";
import { NotFound } from "../utils/httpError";
import { ok, created } from "../utils/jsonResponse";
import { z } from "zod";
import { AuthedRequest } from "../middleware/auth";

type PrismaModel = {
  findUnique: (args: any) => Promise<any>;
  findMany: (args: any) => Promise<any[]>;
  create: (args: any) => Promise<any>;
  update: (args: any) => Promise<any>;
  delete: (args: any) => Promise<any>;
};

interface CrudConfig<T = any> {
  model: PrismaModel;
  entityName: string;
  selectFields?: Record<string, boolean>;
  includeRelations?: Record<string, any>;
}

export async function findEntityById<T>(
  config: CrudConfig<T>,
  id: string,
  options: { select?: any; include?: any } = {}
): Promise<T> {
  const entity = await config.model.findUnique({
    where: { id },
    select: options.select || config.selectFields,
    include: options.include || config.includeRelations,
  });

  if (!entity) {
    throw NotFound(`${config.entityName} no encontrado`);
  }

  return entity;
}

export async function handleList<T>(
  config: CrudConfig<T>,
  req: Request,
  res: Response,
  options: {
    where?: any;
    orderBy?: any;
    queryParser?: z.ZodSchema;
  } = {}
) {
  const items = await config.model.findMany({
    where: options.where || {},
    orderBy: options.orderBy || { createdAt: "desc" },
    select: config.selectFields,
    include: config.includeRelations,
  });

  return ok(res, items, `Listado de ${config.entityName.toLowerCase()}s`);
}

export async function handleGetById<T>(
  config: CrudConfig<T>,
  req: Request,
  res: Response,
  idParamSchema: z.ZodSchema = z.object({ id: z.uuid() })
) {
  const { id } = idParamSchema.parse(req.params) as { id: string };
  const entity = await findEntityById(config, id);
  return ok(res, entity, `Detalle de ${config.entityName.toLowerCase()}`);
}

export async function handleCreate<T>(
  config: CrudConfig<T>,
  req: AuthedRequest,
  res: Response,
  createSchema: z.ZodSchema,
  options: {
    beforeCreate?: (data: any) => Promise<any> | any;
    afterCreate?: (entity: any) => Promise<void> | void;
  } = {}
) {
  const dto = createSchema.parse(req.body);

  const processedData = options.beforeCreate
    ? await options.beforeCreate(dto)
    : dto;

  const entity = await config.model.create({
    data: processedData,
    select: config.selectFields,
    include: config.includeRelations,
  });

  if (options.afterCreate) {
    await options.afterCreate(entity);
  }

  return created(res, entity, `${config.entityName} creado con éxito`);
}

export async function handleUpdate<T>(
  config: CrudConfig<T>,
  req: AuthedRequest,
  res: Response,
  updateSchema: z.ZodSchema,
  idParamSchema: z.ZodSchema = z.object({ id: z.string().uuid() }),
  options: {
    beforeUpdate?: (existingEntity: any, newData: any) => Promise<any> | any;
    afterUpdate?: (entity: any) => Promise<void> | void;
  } = {}
) {
  const { id } = idParamSchema.parse(req.params) as { id: string };
  const dto = updateSchema.parse(req.body);

  const existing = await findEntityById(config, id);

  const processedData = options.beforeUpdate
    ? await options.beforeUpdate(existing, dto)
    : dto;

  const entity = await config.model.update({
    where: { id },
    data: processedData,
    select: config.selectFields,
    include: config.includeRelations,
  });

  if (options.afterUpdate) {
    await options.afterUpdate(entity);
  }

  return ok(res, entity, `${config.entityName} actualizado con éxito`);
}

export async function handleDelete<T>(
  config: CrudConfig<T>,
  req: AuthedRequest,
  res: Response,
  idParamSchema: z.ZodSchema = z.object({ id: z.string().uuid() }),
  options: {
    beforeDelete?: (entity: any) => Promise<void> | void;
    afterDelete?: (entity: any) => Promise<void> | void;
    softDelete?: boolean;
  } = {}
) {
  const { id } = idParamSchema.parse(req.params) as { id: string };

  const entity = await findEntityById(config, id);

  if (options.beforeDelete) {
    await options.beforeDelete(entity);
  }

  if (options.softDelete) {
    await config.model.update({
      where: { id },
      data: { isActive: false, deletedAt: new Date() },
    });
  } else {
    await config.model.delete({ where: { id } });
  }

  if (options.afterDelete) {
    await options.afterDelete(entity);
  }

  return ok(res, null, `${config.entityName} eliminado con éxito`);
}

export async function validateRelatedEntity(
  model: PrismaModel,
  id: string,
  entityName: string
) {
  const entity = await model.findUnique({ where: { id } });
  if (!entity) {
    throw NotFound(`${entityName} no encontrada`);
  }
  return entity;
}
