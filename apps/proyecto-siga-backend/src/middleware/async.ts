import { Request, Response, NextFunction,RequestHandler } from "express";

export type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;


/**
 * Envuelve una función de controlador asíncrona para capturar cualquier error
 * y pasarlo al manejador de errores de Express a través de next().
 * @param fn La función de controlador asíncrona.
 * @returns Un manejador de peticiones de Express.
 */
export const wrap = (fn: AsyncHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Ejecuta la función del controlador. Si la promesa se resuelve, todo bien.
    // Si la promesa se rechaza (hay un error), .catch() lo atrapará
    // y lo pasará a next() para que lo maneje el errorHandler.
    fn(req, res, next).catch(next);
  };
};
export default wrap;
