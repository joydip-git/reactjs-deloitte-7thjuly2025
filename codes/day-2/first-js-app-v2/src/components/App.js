//import Button from "./Button";
const ButtonCtrl = lazy(() => import('./Button'))
import Header from "./Header";
import React, { lazy } from 'react'

function App() {
    const show = false
    return (
        <div>
            <Header />
            <br />
            {
                show && <ButtonCtrl />
            }
        </div>
    )
}
export default App