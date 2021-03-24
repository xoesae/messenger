import { model } from 'mongoose'
import messageSchema from '../schemas/message.schema'

const Message = model('Message', messageSchema)
const messageController = {}

messageController.newMessage = async (req, res) => {
  const message = new Message({ author: 'sidnisadnasdld', text: 'my text' })
  message.save((err) => {
    if (err) return handleError(err)
    console.log('Saved: ', message)
  })
}

export default messageController
