import express from 'express'
import dotenv from 'dotenv'
import productsRoutes from "./components/products/productsRoutes.js";
import categoriesRoutes from "./components/categories/categoriesRoutes.js";

const app = express()

dotenv.config()
const { PORT } = process.env

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/products', productsRoutes)
app.use('/categories', categoriesRoutes)


app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
})
