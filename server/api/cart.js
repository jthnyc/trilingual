const router = require('express').Router()
const {Product, Order, ProductOrder} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'pending'
      }
    })

    if (cart) {
      const currentOrderId = cart.id
      const productList = await ProductOrder.findAll({
        where: {
          orderId: currentOrderId
        },
        include: [{model: Product, as: 'product'}]
      })
      res.json(productList)
    } else {
      res.json([])
    }
  } catch (error) {
    next(error)
  }
})
