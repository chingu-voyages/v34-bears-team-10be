import express from "express";
import { getParentCategories, getCategoriesList } from './categoriesController.js'

const router = express.Router()

router.get('/', getParentCategories )
router.get('/list', getCategoriesList )

export default router