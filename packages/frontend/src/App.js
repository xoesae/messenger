import { io } from 'socket.io-client'
const socket = io('http://localhost:3333');

function App() {
  socket.on('connect', () => {
    console.log(socket)
  })

  return (
    <>
      Hello World
    </>
  );
}

export default App;
