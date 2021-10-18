import express from "express";
import { getProducts, addProducts, deleteProducts, updateProducts } from './productsController.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/add', addProducts )
router.put('/update', updateProducts)
router.delete('/delete', deleteProducts)

export default router


