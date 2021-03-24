import Message from '../models/message.model'

const messageController = {}

messageController.allMessages = async function () {
  try{
    const messages = await Message.find({})
    return messages
  } catch(err){
    console.log(err)
  }
}

messageController.newMessage = async function () {
  let message = new Message({ author: 'sidnisadnasdld', text: 'my text' })
  message = await message.save()
  return message
}

export default messageController
