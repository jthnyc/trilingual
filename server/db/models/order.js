const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Pending', 'Processed']]
    },
    defaultValue: 'pending',
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    validate: {
      isAlpha: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      isAlpha: true
    }
  },
  address: {
    type: Sequelize.TEXT
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
})

module.exports = Order
