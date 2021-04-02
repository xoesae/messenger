import { Server } from 'socket.io'

import database from './config/db.config'
import messageController from './controllers/message.controller'
import userController from './controllers/user.controller'
import getMessages from './utils/getMessages'
import createUser from './utils/createUser'

async function socket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    }
  })

  if (database) {
    console.log('Database connect with sucess')
  }

  io.on('connection', async socket => {
    socket.on('register', async username => {
      const res = await userController.newUser({ name: username, status: 'online' })
      socket.emit('registered', res)
    })

    socket.on('authuser', async userId => {
      const res = await userController.getUserById(userId)
      if (res.sucess) {
        socket.emit('authuser', { auth: true })
      } else {
        socket.emit('authuser', { auth: false })
      }
    })

    socket.on('message', message => {
      messageController.newMessage(message).then(res => {
        if (res.sucess) {
          Promise.resolve(getMessages()).then(messages => {
            io.emit('messages', messages)
          })
        }
      })
    })
  })
}

export default socket
