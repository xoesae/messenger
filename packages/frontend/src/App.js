import React, { useState } from 'react';
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

function App() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  socket.on('connect', () => {
    socket.on('messages', (arg) => {
      setMessages(arg)
    })
  })

  function handleChange(event) {
    setMessage(event.target.value)
  }

  function handleClick(){
    socket.emit('message', message);
    console.log(message)
  }

  return (
    <div>
      <p>{messages}</p>
      <input
        type="text"
        className="input"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
