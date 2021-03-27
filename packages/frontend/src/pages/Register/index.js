import React, { useState, useRef } from 'react'
import { Container, Modal, Title, Input, Button } from './style'

function Register() {
  const [username, setUsername] = useState()
  let input = useRef(null)

  function handleKeyUp() {
    setUsername(input.current.value)
  }

  function handleClick(){
    if(!username.length === 0 || username.trim()){
      
    }
  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return (
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
  );
}

export default Register;
