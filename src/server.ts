import app from './app'
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING AT http://${process.env.HOST}:${process.env.PORT}`)
})
