import express from "express";
import { getBrands, getBrandsList } from './brandsController.js'

const router = express.Router()
/*This will be used to get Categories by params (id, name)
by ID categories?id=1
by name categories?name=tops
*/
router.get('/', getBrands )

//This will be used in the front page
router.get('/list', getBrandsList )

export default router