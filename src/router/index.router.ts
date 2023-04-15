import { Router } from "express"
import {userRouter, userRouterV2} from "./user.router"
import { authRouter } from "./auth.router"

const routers = Router()


routers.use('/v1', userRouter, authRouter),
routers.use('/v2', userRouterV2) 

export {
  routers
}
