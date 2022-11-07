import {
  connectToDatabase,
  insertDoc,
  insertDocs,
  getSortedDocs,
  getOldestBook,
  getBookByTitle,
  disconnectFromDatabase,
} from "./databaseOperations.js"

async function start() {
  let db = await connectToDatabase()
  // You should test your functions here with appropriate values
  // 7.1
  // 7.2
  // 7.3
  // 7.4
  // 7.5
  disconnectFromDatabase()
  console.log("Disconnected")
}

start()
