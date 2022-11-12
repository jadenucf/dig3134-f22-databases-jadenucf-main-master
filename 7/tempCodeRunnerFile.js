beforeAll(async () => {
  try {
    db = await connectToDatabase()
    collection = db.collection("books")
    await collection.deleteMany({})
  } catch (err) {
    console.error(err)
  }
})