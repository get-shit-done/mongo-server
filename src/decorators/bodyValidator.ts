import 'reflect-metadata'
import { MetadataKeys } from '../enums'

export const bodyValidator = (...keys: string[]) => (target: any, key: string) => {
  Reflect.defineMetadata(MetadataKeys.bodyValidator, keys, target, key)
}
