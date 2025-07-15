import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './components/app/App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Provider } from "react-redux";
import AppStore from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <App />
  </Provider>
)


