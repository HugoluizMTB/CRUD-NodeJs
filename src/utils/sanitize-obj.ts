import { ClassConstructor, plainToInstance } from 'class-transformer'

export const SanitizeObj = async <T>(obj: object, cls: ClassConstructor<T>, groups?: string[]): Promise<T> => {
  return await plainToInstance(cls, obj, {
    excludeExtraneousValues: true,
    groups
  })
}