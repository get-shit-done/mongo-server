import 'reflect-metadata'
import { AppRouter } from '../AppRouter'

export const controller = (routePrefix: string) => (target: Function) => {
  // as of es6, prototype properties are not enumerable. instead of `for in`
  // use `getOwnPropertyNames` to access all properties less constructor
  const methods = Object.getOwnPropertyNames(target.prototype).slice(1) 
  const router = AppRouter.getInstance()

  methods.forEach(method => {
    const routehandler = target.prototype[method]
    const path = Reflect.getMetadata('path', target.prototype, method)

    if (path) {
      router.get(routePrefix + path, routehandler)
    }
  })
}
