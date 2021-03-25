import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
  author: { type: String, required: true },
  text:  { type: String, required: true },
} , {collection: 'messages'})

const Message = model('Message', messageSchema)

export default Message
