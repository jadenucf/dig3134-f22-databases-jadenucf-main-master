// You may need to comment out the function calls below when you're not running that specific test.
import {
  connectToDatabase,
  insertDoc,
  insertDocs,
  getSortedDocs,
  getOldestBook,
  getBookByTitle,
  disconnectFromDatabase,
  client,
} from "./databaseOperations.js"
// This function will allow you to condense the output that mongodb provides to the specific properties/values you want. Just replace the json property and values if needed.
function printBook(book) {
  console.log(`${book.title}: ${book.rank}: ${book.published}`)
}
async function start() {
  let db = await connectToDatabase()
  /**You should test your functions here with appropriate values. You may want to comment out the functions you're not going to test for.
   * IMPORTANT! If you run any of the jest tests, they will erase any data that may been stored in your database previous to running that test.
   */
  // 7.1
  insertDoc()
  // 7.2
  // 7.3
  // 7.4
  // 7.5

  //Runs function that closes the database after data retrieval
  disconnectFromDatabase()
  console.log("Disconnected")
}

start()
