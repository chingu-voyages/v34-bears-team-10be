import express from "express";
//import { getAllProducts, addProducts, deleteProducts, updateProducts } from './productsController.js'
import { getAllProducts } from './productsController.js'

const router = express.Router()

router.get('/', getAllProducts)
/*
router.post('/add', addProducts )
router.put('/update', updateProducts)
router.delete('/delete', deleteProducts)
*/
export default router
