'use strict'

const db = require('../server/db')
const {User, Course} = require('../server/db/models')

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

  const courses = await Promise.all([
    Course.create({
      language: 'Chinese - Traditional',
      level: 1,
      description:
        'Easiest level to get started with learning Chinese! Start by saying hello!'
    }),
    Course.create({
      language: 'Chinese - Traditional',
      level: 2,
      description:
        'Learn food items in Chinese cuisine along with simple phrases!'
    }),
    Course.create({
      language: 'Chinese - Traditional',
      level: 3,
      description: 'Getting better each time! More advanced level in Mandarin'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${courses.length} courses`)
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
