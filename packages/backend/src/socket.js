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
    getMessages

    socket.on('message', (arg) => {
      messageController.newMessage(arg).then()
      getMessages
    })
  })
}

export default socket
