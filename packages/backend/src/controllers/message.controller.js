import Message from '../models/message.model'
import userController from './user.controller'
const messageController = {}

messageController.allMessages = async function () {
  try {
    const msgs = await Message.find({})
    return { sucess: true, messages: msgs }
  } catch (err) {
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

messageController.newMessage = async function (msg) {
  try {
    const user = await userController.getUser(msg.author)

    const message = new Message({
      session: msg.session,
      text: msg.text,
      author: user._id
    })
    const messageSave = await message.save()
    return { sucess: true, message: 'message create with sucess', messageSave: messageSave }
  } catch (err) {
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

export default messageController
