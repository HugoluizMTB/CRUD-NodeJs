import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

export const connection = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'
    const user = process.env.MONGO_USER
    const pass = process.env.MONGO_PASS
    const dbName = process.env.MONGO_DB_NAME
    const replicaSet = process.env.MONGO_REPLICA_SET
    console.log(`Conectando-se ao banco: ${uri}`)
    await mongoose.connect(uri, {
      user,
      pass,
      dbName,
      replicaSet, 
      autoCreate: true
    })
    console.log('Conexão criado com sucesso')
  } catch (error) {
    console.log(`Falha ao se conectar ao banco mongodb: ${error}`)
    process.exit(0)
  }
}