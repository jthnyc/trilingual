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
      price: 100,
      inventory: 30,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737181811-4A81X0Z56P3SO0MCVWIN/ke17ZwdGBToddI8pDm48kH4yUCUXJ17ohaS7KdQkQaJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvcaGJ2FZA3HCKOP4jCOOobAjIrPjv1CYdzo4XjbaoYoaB7cXlC74RGNr1M0KekWQ/Joker.21+copy.jpg',
      description:
        'Fabric is buttery soft with support that feels like a gentle hug.\n Dries in a flash for ultimate comfort when breaking a sweat \nFeatures: Side pocket, Moisture-wicking, Breathable, Quick-drying \nMaterial: Nylon/Lycra \nCare: Machine wash and dry.'
    }),
    Product.create({
      SKU: '10000002',
      name: 'Model #2',
      color: 'Black',
      category: 'DC',
      price: 100,
      inventory: 10,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737181811-4A81X0Z56P3SO0MCVWIN/ke17ZwdGBToddI8pDm48kH4yUCUXJ17ohaS7KdQkQaJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvcaGJ2FZA3HCKOP4jCOOobAjIrPjv1CYdzo4XjbaoYoaB7cXlC74RGNr1M0KekWQ/Joker.21+copy.jpg',
      description:
        'Fabric is buttery soft with support that feels like a gentle hug.\n Dries in a flash for ultimate comfort when breaking a sweat \nFeatures: Side pocket, Moisture-wicking, Breathable, Quick-drying \nMaterial: Nylon/Lycra \nCare: Machine wash and dry.'
    }),
    Product.create({
      SKU: '10000002',
      name: 'Model #3',
      color: 'Black',
      category: 'Studio Ghibli',
      price: 100,
      inventory: 15,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/51c274bee4b09c37644e4a12/1553737181811-4A81X0Z56P3SO0MCVWIN/ke17ZwdGBToddI8pDm48kH4yUCUXJ17ohaS7KdQkQaJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvcaGJ2FZA3HCKOP4jCOOobAjIrPjv1CYdzo4XjbaoYoaB7cXlC74RGNr1M0KekWQ/Joker.21+copy.jpg',
      description:
        'Fabric is buttery soft with support that feels like a gentle hug.\n Dries in a flash for ultimate comfort when breaking a sweat \nFeatures: Side pocket, Moisture-wicking, Breathable, Quick-drying \nMaterial: Nylon/Lycra \nCare: Machine wash and dry.'
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
