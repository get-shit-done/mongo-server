import 'reflect-metadata'

export const get = (path: string) => (target: any, key: string) => {
  console.log(path, target, key)
  Reflect.defineMetadata('path', path, target, key)
}
