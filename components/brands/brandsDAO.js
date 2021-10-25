import sequelize from "../../data/database.js"
import initModels from "../../data/schema/init-models.js"
import Sequelize from "sequelize"
const { Op } = Sequelize

export default class BrandsDAO {


  static async getBrands(queryObject) {

    const { id, name } = queryObject
    const DAOQueryObject = {}



    if (id) {
      //if we want to make multiple calls to get more than one brand by id: /brands?id=1&id=2
      if (Array.isArray(id)) {

        DAOQueryObject.id = {
          [Op.or]: []
        }

        id.forEach(brandID => {
          DAOQueryObject.id[Op.or].push({ [Op.eq]: brandID })
        })

      } else {
        // /brands?id=1
        DAOQueryObject.id = {
          [Op.eq]: id
        }
      }

    }

    if (name) {
      //if we want to make multiple calls to get more than one brand by name: /brands?name=VonRueden&name=Paucek-Davis
      if (Array.isArray(name)) {

        DAOQueryObject.name = {
          [Op.or]: []
        }

        name.forEach(brandName => {
          DAOQueryObject.name[Op.or].push({ [Op.iLike]: '%' + brandName + '%' })
        })

      } else {
        ///brands?name=VonRueden: It may return more than one Value is it is a case-insensitive Like, useful for the search engine
        DAOQueryObject.name = {
          [Op.iLike]: '%' + name + '%',
        }
      }
    }

    const Brand = initModels(sequelize).brand
    const Product = initModels(sequelize).product
    const ProductImage = initModels(sequelize).product_image
    const ProductStatus = initModels(sequelize).product_status

    const brands = await Brand.findAll({
      where: {
        [Op.and]: [DAOQueryObject]
      },
      include: { //what associated models to fetch
        model: Product, as: 'products',
        include: [
          {
            model: ProductImage, as: 'product_images'
          },
          {
            model: ProductStatus, as: 'status'
          }
        ]
      }
    })

    return brands
  }


  //Barebones endpoint, will be used for the front-page slider
  static async getBrandsList() {

    const Brand = initModels(sequelize).brand

    const brands = await Brand.findAll()

    return brands

  }

}