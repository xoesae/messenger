import { io } from 'socket.io-client'
const socket = io('http://localhost:3333');

function api(){
  socket.on('connect', () => {
    console.log(socket)
  })

}
export default api;
