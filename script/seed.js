'use strict'

const db = require('../server/db')
const {User, Order, Product, ProductOrder} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Joanna',
      lastName: 'Huang',
      email: 'joanna@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Johannes',
      lastName: 'Brahms',
      email: 'johannes@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Amadeus',
      lastName: 'Mozart',
      email: 'amadeus@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Sergei',
      lastName: 'Rachmaninov',
      email: 'sergei@email.com',
      password: '123'
    })
  ])

  const products = await Promise.all([
    Product.create({
      SKU: '10000001',
      name: 'Model #1',
      color: 'Black',
      category: 'Marvel',
      price: 20,
      inventory: 30,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1528363654397-MIEA5WP4XUOS5H6PHG44/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/yoda.125.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000002',
      name: 'Model #2',
      color: 'Black',
      category: 'DC',
      price: 110,
      inventory: 10,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1528363748207-Z0T3D5DDULMC4JMX6P8L/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/boba+fat.15.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000003',
      name: 'Model #3',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 120,
      inventory: 5,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1528363924362-R1ABQLCOP0HDCB8TD6OF/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/angel.21.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000004',
      name: 'Model #4',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 80,
      inventory: 20,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1528363850091-ZCP7VSZTL3NMDUF4LJRT/ke17ZwdGBToddI8pDm48kIwYrX8g-J6Wt7oDerRK1Y97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0g9xiYCO_4ze-uEG5pWlE5P5pIO1MPUwlZmLL1C7Ledynnf-vMMq-Nlah2ITzz9B1Q/ninjabatman+merged+3.0.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000005',
      name: 'Model #5',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 1000,
      inventory: 1,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737179841-FUCI0I2YXM8MXNCATFAJ/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Sylvanas+309.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000006',
      name: 'Model #6',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 20,
      inventory: 330,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737183925-9CRF6WHIIGLVR2ITXV2X/ke17ZwdGBToddI8pDm48kMPu3vAJVIO2ksrI68T0UXN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqxZRccujZ0JBEEuCWjyuHp4fVbeDgUc_jnUPuWllkKthw/Zoost+Combined.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000007',
      name: 'Model #7',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 90,
      inventory: 50,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737183925-9CRF6WHIIGLVR2ITXV2X/ke17ZwdGBToddI8pDm48kMPu3vAJVIO2ksrI68T0UXN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqxZRccujZ0JBEEuCWjyuHp4fVbeDgUc_jnUPuWllkKthw/Zoost+Combined.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Product.create({
      SKU: '10000008',
      name: 'Model #8',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 800,
      inventory: 5,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1528363957972-YAJ5BCOG5Y9UJJYRVYS3/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/deadpool.55.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
  ])

  const orders = await Promise.all([
    Order.create({
      status: 'Pending',
      firstName: 'Customer',
      lastName: 'NumberOne',
      address: '85 Customer St.',
      city: 'New York',
      state: 'NY',
      zipcode: '11101',
      phone: '123-456-1818'
    }),
    Order.create({
      status: 'Pending',
      firstName: 'Customer',
      lastName: 'NumberTwo',
      address: '100 Great St.',
      city: 'New York',
      state: 'NY',
      zipcode: '11109',
      phone: '212-246-2858'
    }),
    Order.create({
      status: 'Processed',
      firstName: 'Customer',
      lastName: 'NumberThree',
      address: '102 Degrees St.',
      city: 'New York',
      state: 'NY',
      zipcode: '11108',
      phone: '828-818-3868'
    })
  ])

  const productOrder = await Promise.all([
    ProductOrder.create({productId: '1', orderId: '1', quantity: 1}),
    ProductOrder.create({productId: '2', orderId: '2', quantity: 2})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} courses`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${productOrder.length} product orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
