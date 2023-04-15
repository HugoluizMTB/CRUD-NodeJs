import 'express-async-errors'
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { routers } from './router/index.router'
import { AppError } from './model/erros.model'
import { HttpStatus } from './utils/http-status'
import { connection } from './config/database/connection'
import { initializePassport } from './config/authentication/strategy.passport'
import cors from 'cors'

dotenv.config()
const app = express()

initializePassport()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.use('/api', routers)

app.use('*', (req: Request, res: Response) => {
  throw new AppError('Rota não encontrada', HttpStatus.NOT_FOUND)
})

app.use((err: ErrorRequestHandler | Error | AppError, req: Request, res: Response, next: NextFunction) => {
  const isError = err instanceof Error
  const isAppError = err instanceof AppError

  const objError: AppError = {
    message: isAppError ? err.message : isError ? err.message : 'Erro interno do servidor',
    status: isAppError ? err.status : HttpStatus.INTERNAL_SERVER_ERROR,
    data: isAppError ? err.data : isError ? err.stack : undefined
  }

  res.status(objError.status).json(objError)
})

const port = process.env.PORT || 3000
const ambient = process.env.NODE_ENV || 'develop'
app.listen(port, async () => {
  await connection()
  console.log(`Aplicação inicou na porta ${port} no ambiente ${ambient}`)
})
