import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const { CONNECTION_URI }  = process.env

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
}

export default sequelize
