import categoriesDAO from './categoriesDAO.js'


export const getParentCategories = async (req, res) => {
  try {
    const categories = await categoriesDAO.getParentCategories()
    res.status(200).json(categories)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

export const getCategoriesList = async (req, res) => {
  try {
    const categories = await categoriesDAO.getCategoriesList()
    res.status(200).json(categories)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}
