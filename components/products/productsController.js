import productsDAO from './productsDAO.js'


export const getProducts = async (req, res) => {
  try {
    const products = await productsDAO.getProducts()
    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

export const addProducts = async (req, res) => {
  try {
    let { data } = req.body
    data = true;
    const writeResult = await productsDAO.addProducts(data)
    res.status(200).json(writeResult)
  } catch (err) {
    res.status(500).json({message: err.message})
  }

}

export const updateProducts = async (req, res) => {
  try {
    const { updates } = req.body
    const updateResult = await productsDAO.updateProducts(updates)
    res.status(200).json(updateResult)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

export const deleteProducts = async (req, res) => {
  try {
    const { ids } = req.body
    const deleteResult = await productsDAO.deleteProducts(ids)
    res.status(200).json(deleteResult)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}



