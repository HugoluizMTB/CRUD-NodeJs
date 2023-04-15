import { Request, Response } from "express"
import { AuthService } from "../service/index.service"
import { HttpStatus } from "../utils/http-status"

export const login = async (req: Request, res: Response) => {
    const body = req.body
    const login = await AuthService.loginService(body)
    return res.status(HttpStatus.OK).json(login)
}