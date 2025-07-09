import { useState } from 'react';
import './App.css'
import Welcome from './Welcome'

function App() {
  console.log('App');
  //const state = useState<string>('Welcome to React JS with TypeScript')
  const [message, setMessage] = useState('Welcome to React JS with TypeScript')
  const [data, setData] = useState(0)

  const messageHandler = (newMessage: string) => {
    console.log(message)
    //message = newMessage
    setMessage(newMessage)
    console.log(message);
  }

  const dataHandler = (): void => {
    // let temp = data
    // temp++
    // setData(temp)

    setData(
      (currentData) => {
        return currentData + 1
      }
    )
  }

  // const another = Welcome({ messageValue: message, dataValue: data, handlerFn: handler })

  return (
    <div>
      <span>Data:{data}</span>
      <br />
      <button type="button" onClick={dataHandler}>Increase</button>
      <br />
      <Welcome
        messageValue={message}
        dataValue={data}
        handlerFn={messageHandler}
      />
      <br />
      {
        //another
      }
    </div>
  )
}

export default App
