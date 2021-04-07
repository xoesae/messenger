import { Server } from 'socket.io'

import database from './config/db.config'
import messageController from './controllers/message.controller'
import userController from './controllers/user.controller'
import getMessages from './utils/getMessages'

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
    function returningMessage() {
      Promise.resolve(getMessages()).then(messages => {
        function mapingMessages() {
          return messages.map(async j => {
            const msg = {}
            const id = j.author
            const res = await userController.getUserById(id)
            if (res.sucess) {
              msg.text = j.text
              msg.author = res.name
              return msg
            }
          })
        }
        Promise.all(mapingMessages()).then(res => {
          io.emit('messages', res)
        })
      })
    }

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
          returningMessage()
        }
      })
    })
  })
}

export default socket
