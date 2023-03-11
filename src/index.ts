import 'express-async-errors'
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { routersV1 } from './router/index.router'
import { AppError } from './model/erros.model'
dotenv.config()
const app = express()

app.use(express.json())

app.use(express.static('public'))

app.use('/api', routersV1)

app.use('*', (req: Request, res: Response) => {
  throw new Error('Rota não encontrada')
})

app.use((err: ErrorRequestHandler | Error | AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({'teste': 'deu erro'})
})

const port = process.env.PORT || 3000
const ambient = process.env.NODE_ENV || 'develop'
app.listen(port, ()=>{
  console.log(`Aplicação inicou na porta ${port} no ambiente ${ambient}`)
})
