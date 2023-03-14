import { Expose } from 'class-transformer'
import { IsString, IsBoolean, IsNumber, IsNotEmpty, IsOptional} from 'class-validator'
import {Menssage} from '../config/menssages/default-menssages'

export class UserModel {
  @Expose()
  @IsString({message: Menssage.isString})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  id!: string
  
  @Expose()
  @IsString({message: Menssage.isString})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  name!: string
  
  @Expose()
  @IsNumber(undefined, {message: Menssage.isNumber})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  age!: number
  
  @Expose()
  @IsBoolean({message: Menssage.isBollean})
  @IsNotEmpty({message: Menssage.isNotEmpty})
  verify!: boolean
  
  @Expose()
  @IsString({message: Menssage.isString})
  @IsOptional()
  description?: string
}