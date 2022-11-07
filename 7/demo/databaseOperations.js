import { MongoClient } from "mongodb"

export let cachedDb
export let client
const DB_NAME = "ex7"
const MONGODB_URI = "mongodb://localhost:37017/ex7"

export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Existing cached connection found!")
    return cachedDb
  }
  console.log("Aquiring new DB connection....")
  try {
    // Connect to our MongoDB database hosted on MongoDB Atlas

    client = await MongoClient.connect(MONGODB_URI)

    // Specify which database we want to use
    const db = await client.db(DB_NAME)

    cachedDb = db
    console.log("Connected")
    return db
  } catch (error) {
    console.log("ERROR aquiring DB Connection!")
    console.log(error)
    throw error
  }
}

export const disconnectFromDatabase = async () => {
  if (client) {
    return await client.close()
  } else {
    console.log("No client")
  }
}
