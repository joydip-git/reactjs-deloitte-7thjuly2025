import './App.css'
import Counter from './Counter'
import Names from './Names'

function App() {
  const message = 'Counter Element'

  // const counterElement = Counter({ messageValue: message })
  // console.log(counterElement.props);
  // console.log(counterElement.type);
  // return <div>{counterElement}</div>
  return (
    <div>
      <h1>App</h1>
      <br />
      <Counter messageValue={message} />
      <br />
      <Names />
    </div >
  )
}

export default App
