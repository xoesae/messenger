import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(
  `mongodb://localhost/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {})

export default db
