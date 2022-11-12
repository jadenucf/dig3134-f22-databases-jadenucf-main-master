import { MongoClient } from "mongodb"

export let cachedDb
export let client
const DB_NAME = "ex7"
const MONGODB_URI = "mongodb://localhost:37017/ex7"
const COLLECTION_NAME = "books"

/** Export the functions here. You may assume cachedDb has been called 
 * IMPORTANT! If you run any of the jest tests, they will erase any data that may been stored in your database previous to running that test.
*/

/**
 * 7-1. Insert the single object passed in as argument ("doc" parameter) into the "books" collection
 * Return the created document
 */
export const insertDoc = async (doc) => {
}

/**
 * 7-2. Insert an array of documents passed in as only argument ("doc" parameter) into the "books" collection
 * Return the array of created documents
 */
export const insertDocs = async (docs) => {
}
/**
 * 7-3. Assume that there are an array of books in the "books" collection.
 * Return an array of documents based on the field provided as the argument.
 * The order should be ascending if the second argument is true, descending otherwise.
 * *field* string containing the field to sort on
 * *ascending* boolean containing whether the list should be ascending or descending.
 */

export const getSortedDocs = async (field, ascending) => {
}
/** 7-4. Retrieve the oldest document from the "books" collection based on the "published" field.
 * You can assume "published" is a Date type.
 */
export const getOldestBook = async (field) => {
}

/** 7-5. Retrieve all documents as an array that contain part of the string provided
 * in the "title" field. This means using a regular expression created based on the
 * string.
 * **titleQuery** Has the string that should be matched across all documents in the "title" field
 */
export const getBookByTitle = async (titleQuery) => {
}

/**
 * This script below handles the connection to the database, you do not need to alter it, unless your having issues getting the data with the current timeout.
 */

export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Existing cached connection found!")
    return cachedDb
  }
  console.log("Aquiring new DB connection.... " + MONGODB_URI)
  try {
    // Connect to our MongoDB database hosted on MongoDB Atlas

    client = await MongoClient.connect(MONGODB_URI)
    console.log("client connected")
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
  console.log("Somehow didn't work")
}

export const disconnectFromDatabase = async () => {
  if (client) {
      setTimeout( async () => {
        await client.close()
        console.log("Connection closed")
      },50)
  } else {
    console.log("No client")
  }
}
