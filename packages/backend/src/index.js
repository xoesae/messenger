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

let messages = []

io.on('connection', (socket) => {
  io.emit('messages', messages)

  socket.on('message', (arg) => {
    messages.push(arg)
    io.emit('messages', messages)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
