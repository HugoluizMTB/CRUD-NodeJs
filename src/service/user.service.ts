import { UserMock } from "../mock/user.mock"
import { AppError } from "../model/erros.model"
import { UserModel } from "../model/user.model"
import { removeFromArrayObj } from '../utils/array-manipulation'
import { HttpStatus } from "../utils/http-status"
import { SanitizeObj } from "../utils/sanitize-obj"
import { validateClassObj } from "../utils/validate-class-obj"
import { UserRepository } from "../schema/user.schema"
import mongoose from "mongoose"
import { ObjectId } from "mongodb"
import { userRouter } from "../router/user.router"

const validateUser = async(user: UserModel): Promise<UserModel> => {
  const userInstance = await SanitizeObj<UserModel>(user, UserModel, ['password'])
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

export const listAllUsersServiceV2 = async (): Promise<UserModel[]> => {
  return await UserRepository.find()
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

export const createUserServiceV2 =  async (user: UserModel): Promise<UserModel> => {
  user = await validateUser(user)
  user = await UserRepository.create(user)
  return user
}

export const updateUserByIdServiceV2 = async (id: string, body: UserModel): Promise<UserModel> => {
  body = await validateUser(body)
  const user = await UserRepository.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, body)
  return await validateIfUserExistsV2(user)
}

export const validateIfUserExistsV2 = async (user: UserModel | undefined | null): Promise<UserModel> => {
  if(!user) throw new AppError('Usuário não existe', HttpStatus.NOT_FOUND)
  return user
}

export const getUserByIdServiceV2 = async (id: string): Promise<UserModel> => {
  const user = await UserRepository.findOne({_id: new mongoose.Types.ObjectId(id)})
  return await validateIfUserExistsV2(user)
}