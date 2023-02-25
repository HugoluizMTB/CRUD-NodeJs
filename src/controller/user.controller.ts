import { Request, Response } from "express"

/** GET - Buscar a lista de usuários */
const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json({message: 'Lista de usuários'})
}

/** DELETE - Deleta usuário por id */
const deleteUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  res.status(204).json({message: `Deleção de usuário ${userId}`})
}

/** GET - Buscar usuário por id */
const getUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  res.status(200).json({message: `Usuário ${userId}`})
}

/** POST - Criar usuário */
const creatUser = (req: Request, res: Response) => {
  res.status(201).json({message: 'Criação de usuário'})
}

/** PUT - Atualizar usuário por id */
const updateUserById = (req: Request, res: Response) => {
  const {userId} = req.params
  res.status(200).json({message: `Atualizando usuário ${userId}`})
}

export {
  getAllUsers,
  deleteUserById,
  getUserById,
  creatUser,
  updateUserById
}