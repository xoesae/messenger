import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 3333
const app = express()
const httpServer = createServer()

const io = new Server(httpServer, {
  // ...
})

io.on('connection', (socket) => {
  // ...
})

httpServer.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
