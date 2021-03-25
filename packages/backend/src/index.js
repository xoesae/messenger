require('dotenv').config()
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import database from './config/db.config'

import messageController from './controllers/message.controller'

const PORT = process.env.PORT || 3333
const app = express()
const httpServer = createServer()

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

httpServer.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
