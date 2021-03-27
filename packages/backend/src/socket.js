import { Server } from 'socket.io'

import database from './config/db.config'
import messageController from './controllers/message.controller'
import userController from './controllers/user.controller'
import getMessages from './utils/getMessages'
import createUser from './utils/createUser'

async function socket(httpServer){

  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    }
  })

  if(database){
    console.log('Database connect with sucess')
  }

  io.on('connection', async (socket) => {
    Promise.resolve(getMessages()).then(messages => {
      io.emit('messages', messages)
    })

    socket.on('register', username => {
      createUser(username).then(res => {
        socket.emit('registered', res)
      })
    })

    socket.on('message', (messageData) => {
      messageController.newMessage(messageData).then((res) => {
        if(res.sucess){
          Promise.resolve(getMessages()).then(messages => {
            io.emit('messages', messages)
          })
        }
      })
    })
  })
}

export default socket
