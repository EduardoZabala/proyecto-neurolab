import { Request, Response, NextFunction } from 'express'

export type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>

export const wrap = (fn: AsyncHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next) 
    } catch (error) {
      next(error) 
    }
  }
}

export default wrap
