import mongoose from 'mongoose'
import User from './user.model'
const { Schema, model } = mongoose

const messageSchema = new Schema({
  session: {
    type: String,
    require: true
  },
  text:  {
    type: String,
    require: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
} , {
  collection: 'messages'
})

const Message = model('Message', messageSchema)

export default Message
