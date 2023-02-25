import express from 'express'
import * as dotenv from 'dotenv'
import { routersV1 } from './router'
dotenv.config()
const app = express()

app.use(express.static('public'))

app.use('/api', routersV1)

const port = process.env.PORT || 3000
const ambient = process.env.NODE_ENV || 'develop'
app.listen(port, ()=>{
  console.log(`Aplicação inicou na porta ${port} no ambiente ${ambient}`)
})