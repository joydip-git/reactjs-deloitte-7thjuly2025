import AppRoutes from '../../routes/AppRoutes'
import './App.css'
import DashBoard from '../shared/dashboard/DashBoard'
// import TokenStorage from '../../services/tokenservice'
// import { useEffect } from 'react'

function App() {
  // useEffect(
  //   () => {
  //     const sub = TokenStorage
  //       .instantiate()
  //       .tokenObservable
  //       .subscribe((token) => console.log(token ? token : 'na'))

  //     return () => sub.unsubscribe()
  //   }, []
  // )
  return (
    <>
      <DashBoard />
      <div className='container container-fluid margin-style'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
