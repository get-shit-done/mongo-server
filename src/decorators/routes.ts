import 'reflect-metadata'
import { Methods } from './Methods'

const routeFactory = (route: string) => (path: string) => (target: any, key: string) => {
  console.log(path, target, key)
  Reflect.defineMetadata('path', path, target, key)
  Reflect.defineMetadata('method', route, target, key)
}

export const get = routeFactory(Methods.get)
export const put = routeFactory(Methods.put)
export const post = routeFactory(Methods.post)
export const patch = routeFactory(Methods.patch)
// export const del = routeFactory(Methods.del)
