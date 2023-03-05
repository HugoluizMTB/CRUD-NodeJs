import { Router } from "express"
import userRouter from "./user.router"

const routersV1 = Router()

routersV1.use('/v1', userRouter)

export {
  routersV1
}
