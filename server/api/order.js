const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

// router.use('*', (req, res, next) => {
//     try {
//         let paramId =
//     } catch (error) {

//     }
// })

router.put('/:userId', async (req, res, next) => {
  try {
    const currentOrder = await Order.findOne({
      where: {
        id: req.body.orderId
      }
    })
    currentOrder.firstName = req.body.firstName
    currentOrder.lastName = req.body.lastName
    currentOrder.address = req.body.address
    currentOrder.city = req.body.city
    currentOrder.state = req.body.state
    currentOrder.zipcode = req.body.zipcode
    currentOrder.phone = req.body.phone
    currentOrder.status = 'Processed'
    currentOrder.save()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
