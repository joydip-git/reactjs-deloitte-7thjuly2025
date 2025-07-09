import './App.css'
import Welcome from './Welcome'

const App = () => {
  const message = 'Welcome to React wth Vite'
  const data = 100
  //const welcome = Welcome({ messageValue: message,dataValue:data })
  //return welcome

  return (
    <div>
      <Welcome messageValue={message} dataValue={data} />
      <br />
      <Welcome message={message} data={data} messageValue={message} />
    </div>
  )
}

export default App
