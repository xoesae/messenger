import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
  author: String,
  text:  String,
} , {collection: 'messages'})

const Message = model('Message', messageSchema)

export default Message
