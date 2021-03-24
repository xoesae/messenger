import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
  author: String,
  text:  String,
})

const Message = model('Message', messageSchema)

export default Message
