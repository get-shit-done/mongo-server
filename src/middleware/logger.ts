import { NextFunction, Request, Response } from "express" // eslint-disable-line no-unused-vars

export function logger(req: Request, res: Response, next: NextFunction): void {
  console.log('middleware ran')
  next()
}
