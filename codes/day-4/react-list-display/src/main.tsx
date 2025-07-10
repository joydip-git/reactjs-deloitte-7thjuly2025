import { createRoot, type Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const rootHtmlElement: HTMLElement = document.getElementById('root') as HTMLElement
const rootReactElement: Root = createRoot(rootHtmlElement)
rootReactElement.render(
  <App />
)

