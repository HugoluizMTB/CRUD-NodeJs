import { Expose } from 'class-transformer'
import { IsString, IsBoolean, IsNumber, IsNotEmpty, IsOptional, Min, IsEmail} from 'class-validator'
import {Menssage} from '../config/menssages/default-menssages'

export class UserModel {
  @Expose()
  @IsString({message: Menssage.isString})
  @IsOptional()
  id?: string
  
  @Expose()
  @IsString({message: Menssage.isString})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  name!: string
  
  @Expose()
  @IsNumber(undefined, {message: Menssage.isNumber})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  @Min(18, {message: Menssage.mongoMin('idade', '18 anos')})
  age!: number
  
  @Expose({groups: ['verify']})
  @IsBoolean({message: Menssage.isBollean})
  @IsOptional()
  verify?: boolean
  
  @Expose()
  @IsString({message: Menssage.isString})
  @IsOptional()
  description?: string

  @Expose()
  @IsEmail(undefined, {message: Menssage.isEmail})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  email!: string

  @Expose({groups: ['password']})
  @IsString({message: Menssage.isString})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  password!: string
}
