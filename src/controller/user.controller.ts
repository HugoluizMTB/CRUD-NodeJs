import { Request, Response } from "express"
import { UserService } from "../service/index.service"

/** GET - Buscar a lista de usuários */
const getAllUsers = (req: Request, res: Response) => {
  const listUsers = UserService.listAllUsersService()
  res.status(200).json(listUsers)
}

/** DELETE - Deleta usuário por id */
const deleteUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  UserService.deleteUserByIdService(userId)
  res.status(204).json()
}

/** GET - Buscar usuário por id */
const getUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  const user = UserService.getUserByIdService(userId)
  res.status(200).json(user)
}

/** POST - Criar usuário */
const creatUser = (req: Request, res: Response) => {
  const body = req.body
  const user = UserService.createUserService(body)
  res.status(201).json(user)
}

/** PUT - Atualizar usuário por id */
const updateUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  const body = req.body
  const user = UserService.updateUserByIdService(userId, body)
  res.status(200).json(user)
}

export {
  getAllUsers,
  deleteUserById,
  getUserById,
  creatUser,
  updateUserById
}