import './App.css'
import Welcome from './Welcome'

function App() {
  let message = 'Welcome to React JS with TypeScript'
  let data = 100

  const messageHandler = (newMessage: string) => {
    console.log(message)
    message = newMessage
    console.log(message);
  }

  // const another = Welcome({ messageValue: message, dataValue: data, handlerFn: handler })

  return (
    <div>
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
