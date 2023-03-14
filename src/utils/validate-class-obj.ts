import { validateOrReject } from 'class-validator'
import { AppError } from '../model/erros.model'
import { HttpStatus } from './http-status'

export const validateClassObj = async (input: object, message: string): Promise<void> => {
  try {
    await validateOrReject(input, {
      validationError: { target: false, value: false }
    })
  } catch (error) {
    throw new AppError(message, HttpStatus.UNPROCESSABLE_ENTITY, error)
  }
}