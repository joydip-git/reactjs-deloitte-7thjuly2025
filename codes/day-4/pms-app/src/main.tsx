import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './components/app/App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

createRoot(document.getElementById('root')!).render(
  <App />
)
