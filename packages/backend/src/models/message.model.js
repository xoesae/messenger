import mongoose from 'mongoose'
import User from './user.model'
const { Schema, model } = mongoose

const messageSchema = new Schema({
  session: { type: String, required: true },
  text:  { type: String, required: true },
  actions: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }]
} , {collection: 'messages'})

const Message = model('Message', messageSchema)

export default Message
