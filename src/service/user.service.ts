import { UserMock } from "../mock/user.mock"
import { AppError } from "../model/erros.model"
import { UserModel } from "../model/user.model"
import { removeFromArrayObj } from '../utils/array-manipulation'
import { HttpStatus } from "../utils/http-status"
import { SanitizeObj } from "../utils/sanitize-obj"
import { validateClassObj } from "../utils/validate-class-obj"

const validateUser = async(user: UserModel): Promise<UserModel> => {
  const userInstance = await SanitizeObj<UserModel>(user, UserModel)
  await validateClassObj(userInstance, 'Erro ao validar os campos do usuário')
  return userInstance
}

const validateIfUserExists = async (id: string): Promise<UserModel> => {
  const user = UserMock.find((user) => user.id === id) 

  if(!user) throw new AppError('Usuário não existe', HttpStatus.NOT_FOUND)

  return user
}

export const listAllUsersService = async (): Promise<UserModel[]> => {
  return UserMock
}

export const getUserByIdService = async (id: string): Promise<UserModel> => {
  return await validateIfUserExists(id)
}

export const createUserService = async (user: UserModel): Promise<UserModel> => {
  user = await validateUser(user)
  UserMock.push(user)
  return UserMock[UserMock.length - 1]
}

export const deleteUserByIdService = async (userId: string): Promise<void> => {
  await validateIfUserExists(userId)
  removeFromArrayObj(UserMock, userId, 'id')
}

export const updateUserByIdService = async (id: string, body: UserModel): Promise<UserModel> => {
  body = await validateUser(body)
  await deleteUserByIdService(id)
  return await createUserService(body)
}