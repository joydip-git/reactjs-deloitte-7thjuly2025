import "./App.css";
import { useEffect, useState } from "react";
import SocketIO from "socket.io-client";
const socket = SocketIO('http://localhost:3000')

function App() {
  console.log(socket.connected);
  //Room State
  const [room, setRoom] = useState<string>("");
  // Messages States
  const [message, setMessage] = useState<string>("");
  const [messageReceived, setMessageReceived] = useState<string[]>([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room })
  };

  useEffect(
    () => {
      const onReceiveMessage = (data) => {
        console.log(data);
        setMessageReceived((old) => {
          const copy = [...old];
          copy.push(data.message)
          return copy;
        })
      }
      socket.on('receive_message', onReceiveMessage)

      return () => {
        socket.off('receive_message', onReceiveMessage)
      }
    }, [socket]
  )
  return (
    <>
      <div className="App">
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button>
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}> Send Message</button>
        <h1> Message:</h1>
        <ul>
          {
            messageReceived.map(
              m => {
                return <li>{m}</li>
              }
            )
          }
        </ul>
      </div>
    </>
  );
}

export default App;