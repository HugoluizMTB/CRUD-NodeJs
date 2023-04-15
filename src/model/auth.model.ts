import { Expose } from 'class-transformer'
import { IsString, IsNotEmpty, IsEmail} from 'class-validator'
import {Menssage} from '../config/menssages/default-menssages'

export class AuthModel {
 
  @Expose()
  @IsEmail(undefined, {message: Menssage.isEmail})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  email!: string

  @Expose({groups: ['password']})
  @IsString({message: Menssage.isString})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  password!: string
}
