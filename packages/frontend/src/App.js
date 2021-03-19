import React, { useState, useRef } from 'react';
import { Input, Button } from '@material-ui/core'

import { io } from 'socket.io-client'
const socket = io('http://localhost:3333')

function App() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  let input = useRef(null)

  socket.on('connect', () => {
    socket.on('messages', (arg) => {
      setMessages(arg)
    })
  })

  function handleChange() {
    setMessage(input.current.value)
  }

  function handleClick(){
    socket.emit('message', message)
    input.current.value = ''
    handleChange()
  }

  return (
    <div>
      <p>{messages}</p>
      <Input
        type="text"
        placeholder="Type a message"
        inputRef={input}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Enviar</Button>
    </div>
  );
}

export default App;
