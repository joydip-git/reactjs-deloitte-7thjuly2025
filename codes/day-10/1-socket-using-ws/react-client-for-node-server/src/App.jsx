import { useEffect } from "react"
import { useState } from "react"

const createSocket = () => new WebSocket('http://localhost:8082')
const App = () => {

  const [socket, setSocket] = useState(createSocket())
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(
    () => {
      const openHandler = () => console.log('connection is open');
      const messageHandler = (event) => {
        setMessages(prev => [...prev, event.data])
      }
      const closeHandler = (ev) => console.log('connection is closed', ev.code, ev.reason);
      const errorHandler = (err) => console.log(err.message);

      socket.addEventListener('open', openHandler)
      socket.addEventListener('message', messageHandler)
      socket.addEventListener('close', closeHandler)
      socket.addEventListener('error', errorHandler)

      return () => {
        socket.removeEventListener('open', openHandler)
        socket.removeEventListener('message', messageHandler)
        socket.removeEventListener('close', closeHandler)
        socket.removeEventListener('error', errorHandler)

      }
    }, [socket]
  )
  return (
    <>
      <div>
        <div>
          <label htmlFor="txtMessage">Message:&nbsp;</label>
          <input type="text" id='txtMessage' onChange={e => setMessage(e.target.value)} />
        </div>
        <button type="button" onClick={() => socket.send(message)}>
          Send Message
        </button>
      </div>
      <div>
        <button type="button" onClick={() => socket.close()}>
          Close
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={() => setSocket(createSocket())}>
          Open
        </button>
      </div>
      <br />
      <ul>
        {
          messages.map(
            (m, i) => <li key={i}>{m}</li>
          )
        }
      </ul>
    </>
  )
}

export default App