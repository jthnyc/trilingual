const Sequelize = require('sequelize')
const db = require('../db')

const Course = db.define('course', {
  language: {
    type: Sequelize.STRING,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Course
