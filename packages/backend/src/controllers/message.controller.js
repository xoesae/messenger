import Message from '../models/message.model'

const messageController = {}

messageController.newMessage = async (req, res) => {
  const message = new Message({ author: 'sidnisadnasdld', text: 'my text' })
  message.save((err) => {
    if (err) return handleError(err)
    console.log('Saved: ', message)
  })
}

export default messageController
