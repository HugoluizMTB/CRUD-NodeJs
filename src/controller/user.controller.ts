import { Request, Response } from "express"
import { UserService } from "../service/index.service"


/** GET - Buscar a lista de usuários */
const getAllUsers = async (req: Request, res: Response) => {
  const listUsers = await UserService.listAllUsersService()
  res.status(200).json(listUsers)
}

/** GET - Buscar a lista de usuários */
const getAllUsersV2 = async (req: Request, res: Response) => {
  const listUsers = await UserService.listAllUsersServiceV2()
  res.status(200).json(listUsers)
}

/** DELETE - Deleta usuário por id */
const deleteUserById = async (req: Request, res: Response) => {
  const {userId} = req.params
  await UserService.deleteUserByIdService(userId)
  res.status(204).json()
}

/** GET - Buscar usuário por id */
const getUserById = async (req: Request, res: Response) => {
  const {userId} = req.params
  const user = await UserService.getUserByIdService(userId)
  res.status(200).json(user)
}

/** POST - Criar usuário */
const creatUser = async (req: Request, res: Response) => {
  const body = req.body
  const user = await UserService.createUserService(body)
  res.status(201).json(user)
}

/** PUT - Atualizar usuário por id */
const updateUserById = async (req: Request, res: Response) => {
  const {userId} = req.params
  const body = req.body
  const user = await UserService.updateUserByIdService(userId, body)
  res.status(200).json(user)
}

/** POST - Criar usuário */
const creatUserV2 = async (req: Request, res: Response) => {
  const body = req.body
  const user = await UserService.createUserServiceV2(body)
  res.status(201).json(user)
}

/** PUT - Atualizar usuário por id */
const updateUserByIdV2 = async (req: Request, res: Response) => {
  const {userId} = req.params
  const body = req.body
  const user = await UserService.updateUserByIdService(userId, body)
  res.status(200).json(user)
}

/** DELETE - Deleta usuário por id */
const deleteUserByIdV2 = async (req: Request, res: Response) => {
  const {userId} = req.params
  await UserService.deleteUserByIdService(userId)
  res.status(204).json()
}

/** GET - Buscar usuário por id */
const getUserByIdV2 = async (req: Request, res: Response) => {
  const {userId} = req.params
  const user = await UserService.getUserByIdService(userId)
  res.status(200).json(user)
}

export {
  getAllUsers,
  deleteUserById,
  getUserById,
  creatUser,
  updateUserById,
  creatUserV2,
  updateUserByIdV2,
  deleteUserByIdV2,
  getUserByIdV2,
  getAllUsersV2
}