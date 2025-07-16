import { Outlet } from 'react-router-dom'
import AppRoutes from '../../routes/AppRoutes'
import './App.css'
import DashBoard from '../shared/dashboard/DashBoard'

function App() {
  return (
    <>
      <DashBoard />
      <div className='container container-fluid margin-style'>
        <AppRoutes />
        <Outlet />
      </div>
    </>
  )
}

export default App
