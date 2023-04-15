import { Router } from "express"
import { UserController } from "../controller/index.controller"
import { authenticate } from "../config/authentication/strategy.passport"

 
const userRouter = Router()

userRouter.get('/user', [authenticate()], UserController.getAllUsers)
userRouter.delete('/user/:userId', [], UserController.deleteUserById)
userRouter.get('/user/:userId', [], UserController.getUserById)
userRouter.post('/user', [], UserController.creatUser)
userRouter.put('/user/:userId', [], UserController.updateUserById)

const userRouterV2 = Router()
userRouterV2.get('/user', [], UserController.getAllUsersV2)
userRouterV2.post('/user', [], UserController.creatUserV2)
userRouterV2.put('/user/:userId', [], UserController.updateUserByIdV2)
userRouterV2.get('user/:userid', [], UserController.getUserByIdV2)
userRouterV2.get('user', [], UserController.getUserByIdV2)
export {
    userRouter,
    userRouterV2
}