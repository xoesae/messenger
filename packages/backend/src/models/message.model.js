import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    session: {
      type: String,
      require: true
    },
    text: {
      type: String,
      require: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    collection: 'messages',
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema)

export default Message
