import Message from '../models/message.model'

const messageController = {}

messageController.allMessages = async function () {
  try{
    const msgs = await Message.find({})
    return { sucess: true, messages: msgs }
  } catch(err){
    return { sucess: false, message: 'an error ocurred', error: err }
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
