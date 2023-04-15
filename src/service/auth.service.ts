import { AuthModel } from "../model/auth.model";
import { SanitizeObj } from "../utils/sanitize-obj";
import { validateClassObj } from "../utils/validate-class-obj";
import { UserRepository } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import * as argon from 'argon2'
import { AppError } from "../model/erros.model";
import { HttpStatus } from "../utils/http-status";
import { generateTokenJWT } from "../config/authentication/strategy.passport";

const validateAuth = async(user: AuthModel): Promise<AuthModel> => {
        const authInstance = await SanitizeObj<AuthModel>(user, AuthModel, ['password'])
        await validateClassObj(authInstance, 'Erro ao validar os campos do usuário')
        return authInstance
      }

const validatePassword = async (user: UserModel | null, password: string): Promise<void> => {
    let validate = false
    if (user) {
        validate = await argon.verify(user.password, password + user.email)
    }
    if (!validate) throw new AppError('Email ou senha incorreta', HttpStatus.UNAUTHORIZED)
}

export const loginService = async (body: AuthModel) => {
    body = await validateAuth(body)
    let user = await UserRepository.findOne({email: body.email}).select('email password name')
    await validatePassword(user, body.password)
    const token = await generateTokenJWT({email: user?.email, id: user?._id, username: user?.name})
    return{ 
        username: user?.name,
        id: user?._id,
        token
    }
}

