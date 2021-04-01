import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true
    },
    status: {
      type: String,
      require: true
    }
  },
  {
    collection: 'users',
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

export default User
