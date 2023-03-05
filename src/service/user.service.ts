import { UserMock } from "../mock/user.mock"
import { UserModel } from "../model/user.model"
import { removeFromArrayObj } from '../utils/array-manipulation'

const validateIfUserExists = (id: string) => {
  const user = UserMock.find((user) => user.id === id) 

  if(!user) throw new Error('Usuário não existe')

  return user
}

export const listAllUsersService = (): UserModel[] => {
  return UserMock
}

export const getUserByIdService = (id: string): UserModel => {
  return validateIfUserExists(id)
}

export const createUserService = (user: UserModel): UserModel => {
  UserMock.push(user)
  return UserMock[UserMock.length - 1]
}

export const deleteUserByIdService = (userId: string): void => {
  validateIfUserExists(userId)
  removeFromArrayObj(UserMock, userId, 'id')
}

export const updateUserByIdService = (id: string, body: UserModel): UserModel => {
  deleteUserByIdService(id)
  return createUserService(body)
}