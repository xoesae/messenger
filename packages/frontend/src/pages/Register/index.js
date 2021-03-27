import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Modal, Title, Input, Button } from './style'

import { io } from 'socket.io-client'
const socket = io('http://localhost:3333')

function Register() {
  const [username, setUsername] = useState()
  const [registered, setRegistered] = useState(false)
  let input = useRef(null)

  socket.on('registered', arg => {
    if(arg.sucess){
      window.localStorage.setItem('username', username)
      setRegistered(true)
    }
  })

  function handleKeyUp() {
    setUsername(input.current.value)
  }

  function handleClick(){
    if(!username.length === 0 || username.trim()){
      socket.emit('register', username)
    }
  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return (
    <>
    {
      registered ? (
        <Redirect to="/"/>
      ) : (
        <Container>
          <Modal>
            <Title>
              Welcome
            </Title>
            <Input
              type="text"
              placeholder="Type your username"
              ref={input}
              onKeyUp={handleKeyUp}
              onKeyPress={handleKeyPress}
            />
            <Button
              onClick={handleClick}
            >
              Enter
            </Button>
          </Modal>
          </Container>
      )
    }
    </>
  );
}

export default Register;
