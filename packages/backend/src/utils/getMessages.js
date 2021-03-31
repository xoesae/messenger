import messageController from '../controllers/message.controller'

async function getMessages() {
  try {
    const res = await messageController.allMessages()

    if (res.sucess) {
      return res.messages
    } else {
      console.log(res)
    }
  } catch (err) {
    console.log(err)
  }
}

export default getMessages
