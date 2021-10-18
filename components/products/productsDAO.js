import products from '../../mock-data/Zemnoga.Product.json'

// ORM stuff goes here

export default class ProductsDAO {
  static async getProducts () {
    return products
  }
  static async addProducts (productsData) {
    return {insertStatus: true}
  }
  static async updateProducts (productsUpdates) {
    return {updateStatus: true}

  }
  static async deleteProducts (productsIds) {
    return {deleteStatus: true}
  }
}