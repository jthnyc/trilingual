const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.use('*', (req, res, next) => {
  try {
    // req.params when entering userId looks like this: { '0': '/1' }, need to also convert it to a number
    let userId = Number(req.params['0'].slice(1))

    if (req.session.user.id === userId) {
      next()
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({
      where: {
        id: id
      }
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})
