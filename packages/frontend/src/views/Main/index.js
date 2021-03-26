import React, { useState, useRef } from 'react';
import { Container, Chat, SendMessage, InputContainer, ButtonContainer, Message, Input, Button } from './style';

import { io } from 'socket.io-client'
const socket = io('http://localhost:3333')

function Main() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState({
    session: socket.id,
    text: '',
    author: {
      name: 'myuser'
    }})
  let input = useRef(null)

  socket.on('connect', () => {
    socket.on('messages', (arg) => {
      setMessages(arg)
    })
  })

  function handleKeyUp() {
    setMessage({session: socket.id, text: input.current.value, author: { name: 'myuser' }})
  }

  function handleClick(){
    if(!message.text.length === 0 || message.text.trim()){
      socket.emit('message', message)
      input.current.text = ''
      handleKeyUp()
    }
  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return (
    <Container>
      <Chat>
        {messages.map((msg, i) => {
          if(msg.session === socket.id){
            return (<Message key={i} author={0}>{msg.text}</Message>)
          } else{
            return (<Message key={i} author={1}>{msg.text}</Message>)
          }
        })}
      </Chat>
      <SendMessage>
        <Input
          type="text"
          placeholder="Type a message"
          inputRef={input}
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          />
        <Button onClick={handleClick}>Send</Button>
      </SendMessage>
    </Container>
  );
}

export default Main;
