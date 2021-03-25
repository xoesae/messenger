import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: { type: String, required: true },
  status:  { type: String, required: true },
} , {collection: 'users'})

const User = model('User', messageSchema)

export default User
