import { ClassConstructor, plainToInstance } from 'class-transformer'

export const SanitizeObj = async <T>(obj: object, cls: ClassConstructor<T>): Promise<T> => {
  return await plainToInstance(cls, obj, {
    excludeExtraneousValues: true
  })
}