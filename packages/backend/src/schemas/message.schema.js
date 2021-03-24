import mongoose from 'mongoose'
const { Schema } = mongoose

const messageSchema = new Schema({
  author: String,
  text:  String,
})

export default messageSchema
