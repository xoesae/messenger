import { createServer } from 'http'
import socket from './socket'
require('dotenv').config()

const PORT = process.env.PORT || 3333
const httpServer = createServer()

socket(httpServer)

httpServer.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
