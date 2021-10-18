import express from 'express'
import dotenv from 'dotenv'
import { Sequelize } from "sequelize"

import productsRoutes from "./components/products/productsRoutes.js";

const app = express()

dotenv.config()
const { PORT, CONNECTION_URI } = process.env


app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/products', productsRoutes)


const sequelize = new Sequelize(CONNECTION_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

try {
  await sequelize.authenticate();
  console.log("Connection has been established")
} catch (error) {
  console.log('Unable to connect to the database:', error)
} finally {
  sequelize.close()
}


app.listen(PORT, ()=> {
  console.log(`App listening at ${PORT}`)
})
