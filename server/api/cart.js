const router = require('express').Router()
const {Product, Order, ProductOrder} = require('../db/models')
const User = require('../db/models/user')
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

router.post('/:userId', async (req, res, next) => {
  try {
    const existingOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Pending'
      }
    })

    let currentOrder

    if (!existingOrder) {
      currentOrder = await Order.create()
      const currentUser = await User.findOne({
        where: {
          id: req.params.userId
        }
      })
      currentUser.addOrder(currentOrder)
    } else {
      currentOrder = existingOrder
    }

    let currentProductOrder
    currentProductOrder = await ProductOrder.findOne({
      where: {
        orderId: currentOrder.id,
        productId: req.body.productId
      },
      include: [{model: Product, as: 'product'}]
    })

    if (!currentProductOrder) {
      const currentProduct = await Product.findOne({
        where: {id: req.body.productId},
        include: [{model: ProductOrder}]
      })
      await currentOrder.addProduct(currentProduct)
      currentProductOrder = await ProductOrder.findOne({
        where: {
          orderId: currentOrder.id,
          productId: req.body.productId
        },
        include: [{model: Product, as: 'product'}]
      })
    } else {
      currentProductOrder.quantity++
      currentProductOrder.save()
    }
    res.status(201).json(currentProductOrder)
  } catch (error) {
    next(error)
  }
})
