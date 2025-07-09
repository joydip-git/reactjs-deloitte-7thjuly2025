import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Lets you find common bugs in your components early during development.
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const rootHTMLElement = document.getElementById('root')
const rootReactElement = createRoot(rootHTMLElement)
// const appReactElement = App()
// rootReactElement.render(appReactElement)
rootReactElement.render(
  <StrictMode>
    <App />
  </StrictMode>
)
