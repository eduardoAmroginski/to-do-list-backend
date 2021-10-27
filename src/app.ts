import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes'
dotenv.config()

class App {
    public express : express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares () : void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect(process.env.MONGODB_STRING, {
        // useNewUrlParser: true // Não é mais necessário na ultima versão do Mongoose com TS
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
