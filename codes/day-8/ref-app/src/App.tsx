import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [value, setValue] = useState('')
  const [showError, setShowError] = useState(false)

  const handleFormInput = (val: string) => {
    setValue(val);
    validate()
  }

  const inputElementRef = useRef<HTMLInputElement | null>(null)

  useEffect(
    () => {
      if (inputElementRef.current)
        inputElementRef.current.focus()
    }
  )


  const validate = () => {
    if (inputElementRef.current)
      if (inputElementRef.current.value === '')
        setShowError(true)
      else
        setShowError(false)
  }
  return (
    <div>
      <Form
        inputHandler={handleFormInput}
        validationHandler={validate}
        show={showError}
        inputRef={inputElementRef}
      />
      {
        /* <Form
          inputHandler={handleFormInput}
          validationHandler={validate}
          show={showError}
          ref={inputElementRef}
        /> */
      }
    </div>
  )
}

export default App
