import sequelize from "../../data/database.js"
import initModels from "../../data/schema/init-models.js"
import Sequelize from "sequelize"
const { Op } = Sequelize

export default class CategoriesDAO {


  static async getCategories(queryObject) {

    const { id, name } = queryObject
    const DAOQueryObject = {}

    if (id) {
      DAOQueryObject.id = {
        [Op.eq]: id
      }
    }

    if (name) {
      DAOQueryObject.name = {
        [Op.iLike]: '%' + name + '%',
      }
    }

    const Category = initModels(sequelize).category
    const categories = await Category.findAll({
      where: {
        [Op.and]: [DAOQueryObject]
      },
      include: ['categories']
    })

    return categories
  }

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