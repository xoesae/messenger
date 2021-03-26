import { Server } from 'socket.io'

import database from './config/db.config'
import messageController from './controllers/message.controller'
import getMessages from './utils/getMessages'

async function socket(httpServer){

  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    }
  })

  if(database){
    console.log('Database connect with sucess')
  }

  io.on('connection', (socket) => {
    Promise.resolve(getMessages).then((messages) => {
      io.emit('messages', messages)
    })
    socket.on('message', (messageData) => {
      messageController.newMessage(messageData).then()

      Promise.resolve(getMessages).then((messages) => {
        io.emit('messages', messages)
      })
    })
  })
}

export default socket
