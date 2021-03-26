import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  status:  {
    type: String,
    require: true
  }
} , {
  collection: 'users'
})

const User = model('User', userSchema)

export default User
