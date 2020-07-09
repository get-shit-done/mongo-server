import 'reflect-metadata'
import { RequestHandler } from 'express' // eslint-disable-line no-unused-vars
import { MetadataKeys } from '../enums'

export const use = (middleware: RequestHandler) => (target: any, key: string, propDesc: PropertyDescriptor) => {
  const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || []
  middlewares.push(middleware)
  console.log(middlewares)
  Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, key)
}
