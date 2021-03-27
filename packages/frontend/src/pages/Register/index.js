import { Container, Modal, Title, Input, Button } from './style'

function Register() {
  return (
    <Container>
      <Modal>
        <Title>
          Welcome
        </Title>
        <Input
          type="text"
          placeholder="Type your username"
        />
        <Button>Enter</Button>
      </Modal>
    </Container>
  );
}

export default Register;
