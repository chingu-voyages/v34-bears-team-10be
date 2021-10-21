//import products from '../../mock-data/Zemnoga.Product.json'

// ORM stuff goes here
import sequelize  from "../../data/database.js"
import initModels from "../../data/schema/init-models.js"


export default class ProductsDAO {
  
  //renamed to getAllProducts - we will need pagination
  static async getAllProducts () {
    const Product = initModels(sequelize).product
    const products = await Product.findAll(
      { include: ['brand', 'status', 'product_images'] }
    );
    return products
  }

  /* --------------------------------------------------------------------------------------
  Commenting out other CRUD functions
  We will focus on the fetching of mock data for now, as we will not have a CMS for starters
  These will be used when the mock data will be updated in a future sprint
  ------------------------------------------------------------------------------------------

  static async addProducts (productsData) {
    return {insertStatus: true}
  }

  static async updateProducts (productsUpdates) {
    return {updateStatus: true}

  }

  static async deleteProducts (productsIds) {
    return {deleteStatus: true}
  }
  */
}