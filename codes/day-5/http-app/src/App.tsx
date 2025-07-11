import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  const [countX, setCountX] = useState(0)

  const showHandler = () => {
    setShow(
      (oldShow) => {
        return !oldShow
      }
    )
  }
  const countHandler = () => {
    setCount(oldCount => { return oldCount + 1 })
  }
  return (
    <>
      CountX: &nbsp;<span>{countX}</span>
      <br />

      <button type='button' onClick={() => setCountX(c => c + 1)}>IncreaseX</button>
      <br />
      <button type='button' onClick={countHandler}>Increase</button>
      <br />
      <button type='button' onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
      {
        show && (
          <div>
            <h2>List of Posts</h2>
            <br />
            <Posts countData={count} />
          </div>
        )
      }
    </>
  )
}

export default App
