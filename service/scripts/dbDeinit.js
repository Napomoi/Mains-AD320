import mongoose from 'mongoose'
import { User } from '../models/User.js'

const sleepAndQuit = new Promise((resolve) => {
  setTimeout(() => {
    mongoose.connection.close()
    resolve()
  }, 5000)
})

const deinitDB = async () => {
  const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@week6cluster.1qfd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  try {
    await mongoose.connect(connectionString)
  } catch (err) {
    console.log('error ', err)
  }

  await User.deleteMany({})

  await sleepAndQuit

  console.log('finished deleting users')
}

deinitDB()
