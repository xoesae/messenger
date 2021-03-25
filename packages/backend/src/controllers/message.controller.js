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

messageController.newMessage = async function (msg) {
  try{
    let message = new Message(msg)
    message = await message.save()
    return { sucess: true, message: 'message create with sucess' }
  } catch(err){
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

export default messageController
