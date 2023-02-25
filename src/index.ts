import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.static('public'))

/** Rota GET - Olá mundo */
app.get('/', (req, res) => {
  res.send('<p>oi</p>')
})

app.post('/post', (req, res) => {
  res.send('rota de post')
})

const port = process.env.PORT || 3000
const ambient = process.env.NODE_ENV || 'develop'
app.listen(port, ()=>{
  console.log(`Aplicação inicou na porta ${port} no ambiente ${ambient}`)
})
