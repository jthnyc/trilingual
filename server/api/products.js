const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params.id
    const product = await Product.findOne({
      where: {
        id: id
      }
    })
    res.send(product)
  } catch (error) {
    next(error)
  }
})
