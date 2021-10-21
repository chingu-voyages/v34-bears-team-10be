//import products from '../../mock-data/Zemnoga.Product.json'


// ORM stuff goes here
import sequelize from "../../data/database.js"
import initModels from "../../data/schema/init-models.js"
import Sequelize from "sequelize"
const { Op } = Sequelize 

export default class CategoriesDAO {

  //This will be used in the front page
  static async getParentCategories() {
    const Category = initModels(sequelize).category
    const categories = await Category.findAll({
      where: {
        [Op.and]: [
          { parent_id: 0 },
          {
            id: {
              [Op.ne]: 0
            }
          }
        ]
      }
    })
    return categories
  }

  //This will be used in the side-bar as a list and in the main menu
  static async getCategoriesList() {
    const Category = initModels(sequelize).category
    const categories = await Category.findAll({
      where: {
        [Op.and]: [
          { parent_id: 0 },
          {
            id: {
              [Op.ne]: 0
            }
          }
        ]
      },
      include: ['categories']
    })
    return categories
  }

}