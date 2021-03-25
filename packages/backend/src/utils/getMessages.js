async function getMessages(messageController){
  messageController.allMessages().then((res) => {
    if(res.sucess){
      io.emit('messages', res.messages)
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export default getMessages
