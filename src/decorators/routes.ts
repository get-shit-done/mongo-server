import 'reflect-metadata'
import { RequestHandler } from 'express' // eslint-disable-line no-unused-vars
import { Methods, MetadataKeys } from '../enums'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

// i am setting the type of desc to require a requet handler type if any. this warning is bogus
const routeFactory = (route: string) => (path: string) => (target: any, key: string, desc: RouteHandlerDescriptor) => {
  Reflect.defineMetadata(MetadataKeys.path, path, target, key)
  Reflect.defineMetadata(MetadataKeys.method, route, target, key)
}

export const get = routeFactory(Methods.get)
export const put = routeFactory(Methods.put)
export const post = routeFactory(Methods.post)
export const patch = routeFactory(Methods.patch)
// export const del = routeFactory(Methods.del)
