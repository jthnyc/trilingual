const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  SKU: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    // store as pennies
    type: Sequelize.INTEGER,
    min: 0
  },
  inventory: {
    type: Sequelize.INTEGER,
    min: 0
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1575304355370-546314563f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
})

module.exports = Product
