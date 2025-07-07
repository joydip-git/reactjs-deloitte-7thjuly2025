//bootstrapper code (starts up the application)

// function loadView() {
//     // document.body.innerHTML = view
//     // const btnObj = document.getElementById('btnClick')
//     // btnObj?.addEventListener('click', clicked)
//     const appDesign = app()

//     const rootEle = document.getElementById('root')
//     rootEle.appendChild(appDesign)
// }
// window.addEventListener('DOMContentLoaded', loadView)

import { app } from './components/app'

const appDesign = app()
const rootEle = document.getElementById('root')
rootEle.appendChild(appDesign)

