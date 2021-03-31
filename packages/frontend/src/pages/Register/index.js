import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Modal, Title, Input, Button } from './style'
import socket from '../../services/socket'

function Register() {
  const [username, setUsername] = useState()
  const [registered, setRegistered] = useState(false)
  let input = useRef(null)

  socket.on('registered', res => {
    if (res.sucess) {
      localStorage.setItem('id', res.user._id)
      setRegistered(true)
    }
  })

  function handleKeyUp() {
    setUsername(input.current.value)
  }

  function handleClick() {
    if (!username.length === 0 || username.trim()) {
      socket.emit('register', username)
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <>
      {registered ? (
        <Redirect to="/" />
      ) : (
        <Container>
          <Modal>
            <Title>Welcome</Title>
            <Input type="text" placeholder="Type your username" ref={input} onKeyUp={handleKeyUp} onKeyPress={handleKeyPress} />
            <Button onClick={handleClick}>Enter</Button>
          </Modal>
        </Container>
      )}
    </>
  )
}

export default Register
