import brandsDAO from './brandsDAO.js'

export const getBrands = async (req, res) => {

  const { id, name } = req.query
  const queryObject = {}
  
  if (id) {
    queryObject.id = id
  }

  if (name) {
    queryObject.name = name
  }

  try {
    const brands = await brandsDAO.getBrands(queryObject)
    res.status(200).json(brands)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

export const getBrandsList = async (req, res) => {
  try {
    const brands = await brandsDAO.getBrandsList()
    res.status(200).json(brands)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}
