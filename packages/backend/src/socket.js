import express from 'express'
import { Server } from 'socket.io'

import database from './config/db.config'
import messageController from './controllers/message.controller'

const app = express()

async function socket(httpServer){

  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    }
  })

  if(database){
    console.log('Database connect with sucess')
  }

  async function getMessages(){
    messageController.allMessages().then((res) => {
      if(res.sucess){
        io.emit('messages', res.messages)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  io.on('connection', (socket) => {
    getMessages().then()

    socket.on('message', (arg) => {
      messageController.newMessage(arg).then()
      getMessages().then()
    })
  })
}

export default socket
