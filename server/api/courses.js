const router = require('express').Router()
const {Course} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.findAll()
    res.json(courses)
  } catch (error) {
    next(error)
  }
})
