import messageController from '../controllers/message.controller'

const getMessages = messageController.allMessages().then((res) => {
  if(res.sucess){
    return res.messages
  }
})
.catch((err) => {
  console.log(err)
})

export default getMessages
