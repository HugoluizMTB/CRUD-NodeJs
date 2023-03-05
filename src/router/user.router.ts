import { Router } from "express"
import { UserController } from "../controller/index.controller"

const userRouter = Router()

userRouter.get('/user', [], UserController.getAllUsers)
userRouter.delete('/user/:userId', [], UserController.deleteUserById)
userRouter.get('/user/:userId', [], UserController.getUserById)
userRouter.post('/user', [], UserController.creatUser)
userRouter.put('/user/:userId', [], UserController.updateUserById)

export default userRouter