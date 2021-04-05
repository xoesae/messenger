import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Chat, SendMessage, Message, MessageAuthor, MessageText, Input, Button } from './style'
import socket from '../../services/socket'

function Main() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState({
    session: socket.id,
    text: '',
    author: localStorage.getItem('id')
  })

  let input = useRef(null)
  let history = useHistory()

  useEffect(() => {
    const userId = localStorage.getItem('id')
    socket.emit('authuser', userId)
  }, [])

  socket.on('authuser', res => {
    if (!res.auth) {
      history.push(`/register`)
    }
  })

  socket.on('messages', arg => {
    setMessages(arg)
  })

  function handleKeyUp() {
    setMessage({
      session: socket.id,
      text: input.current.value,
      author: window.localStorage.getItem('id')
    })
  }

  function handleClick() {
    if (!message.text.length === 0 || message.text.trim()) {
      socket.emit('message', message)
      input.current.value = ''
      handleKeyUp()
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <Container>
      <Chat>
        {messages.map((msg, i) => {
          return (
            <Message key={i}>
              <MessageAuthor>{msg.author}</MessageAuthor>
              <MessageText>{msg.text}</MessageText>
            </Message>
          )
        })}
      </Chat>
      <SendMessage>
        <Input type="text" placeholder="Type a message" ref={input} onKeyUp={handleKeyUp} onKeyPress={handleKeyPress} />
        <Button onClick={handleClick}>Send</Button>
      </SendMessage>
    </Container>
  )
}

export default Main
