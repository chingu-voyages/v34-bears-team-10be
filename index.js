import express from 'express'
import dotenv from 'dotenv'
import productsRoutes from "./components/products/productsRoutes.js"
import categoriesRoutes from "./components/categories/categoriesRoutes.js"
import brandsRoutes from "./components/brands/brandsRoutes.js"


const app = express()

dotenv.config()
const { PORT } = process.env

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/products', productsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/brands', brandsRoutes)


app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
})
