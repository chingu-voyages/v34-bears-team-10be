import express from "express";
import { getParentCategories, getCategoriesList, getCategories } from './categoriesController.js'

const router = express.Router()
/*This will be used to get Categories by params (id, name)
by ID categories?id=1
by name categories?name=tops
*/
router.get('/', getCategories )

//This will be used in the front page
router.get('/parent', getParentCategories )

//This will be used in the side-bar as a list and in the main menu
router.get('/list', getCategoriesList )

export default router