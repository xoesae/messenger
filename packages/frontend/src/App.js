import React, { useState } from 'react';
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

function App() {
  const [messages, setMessages] = useState([])

  socket.on('connect', () => {
    socket.emit('message', 'content of message');
    socket.on('messages', (arg) => {
      setMessages(arg)
    })
  })

  return (
    <p>
      {messages}
    </p>
  );
}

export default App;
