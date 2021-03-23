import React, { useState, useRef } from 'react';
import { Input, Button } from '@material-ui/core'
import { Container, SendMessage, InputContainer, ButtonContainer, Message} from './style';

import { io } from 'socket.io-client'
const socket = io('http://localhost:3333')

function Main() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState({id: socket.id, value: ''})
  let input = useRef(null)

  socket.on('connect', () => {
    socket.on('messages', (arg) => {
      setMessages(arg)
    })
  })

  function handleKeyUp() {
    setMessage({id: socket.id, value: input.current.value})
  }

  function handleClick(){
    if(!message.value.length === 0 || message.value.trim()){
      socket.emit('message', message)
      input.current.value = ''
      handleKeyUp()
    }
  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return (
    <>
      <Container>
        {messages.map((msg, i) => {
          if(msg.id === socket.id){
            return (<Message key={i} author={0}>{msg.value}</Message>)
          } else{
            return (<Message key={i} author={1}>{msg.value}</Message>)
          }
        })}
      </Container>
      <SendMessage>
        <InputContainer>
          <Input
            type="text"
            placeholder="Type a message"
            inputRef={input}
            onKeyUp={handleKeyUp}
            onKeyPress={handleKeyPress}
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleClick}>Enviar</Button>
        </ButtonContainer>
      </SendMessage>
    </>
  );
}

export default Main;
