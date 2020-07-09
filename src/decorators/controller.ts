import 'reflect-metadata'
import { Router } from 'express'

export const router = Router()

export const controller = (routePrefix: string) => (target: Function) => {
  // as of es6, prototype properties are not enumerable. instead of `for in`
  // use `getOwnPropertyNames` to access all properties less constructor
  const methods = Object.getOwnPropertyNames(target.prototype).slice(1) 
  // console.log(methods)
  methods.forEach(method => {
    const routehandler = target.prototype[method]
    const path = Reflect.getMetadata('path', target.prototype, method)

    if (path) {
      router.get(routePrefix + path, routehandler)
    }
  })
}
