import Message from '../models/message.model'

const messageController = {}

messageController.newMessage = async function () {
  let message = new Message({ author: 'sidnisadnasdld', text: 'my text' })
  message = await message.save()
  return message
}

export default messageController
