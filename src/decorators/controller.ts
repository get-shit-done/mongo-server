import 'reflect-metadata'
import { RequestHandler, Request, Response, NextFunction } from 'express' // eslint-disable-line no-unused-vars
import { AppRouter } from '../AppRouter'
import { Methods, MetadataKeys } from '../enums' // eslint-disable-line no-unused-vars

const validateUtil = (keys: string[]): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    res.status(422).send('no body')
    return
  } 
  const isValid = keys.every(key => req.body[key] !== undefined)
  console.log('is valid? ', keys, req.body, isValid)
  !isValid ? res.status(422).send('invalid input') : next()
}

export const controller = (routePrefix: string) => (target: Function) => {
  // as of es6, prototype properties are not enumerable. instead of `for in`
  // use `getOwnPropertyNames` to access all properties less constructor
  const properties = Object.getOwnPropertyNames(target.prototype).slice(1) 
  const router = AppRouter.getInstance()

  properties.forEach(property => {
    const routehandler = target.prototype[property]
    const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, property)

    // Reflect.getMethodData rerurns any type, so use enum to assign type to method
    const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, property)
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, property) || []
    const requiredBodyProps = Reflect.getMetadata(MetadataKeys.bodyValidator, target.prototype, property) || []

    const validator = validateUtil(requiredBodyProps)

    if (path) {
      router[method](routePrefix + path, ...middlewares, validator, routehandler)
    }
  })
}
