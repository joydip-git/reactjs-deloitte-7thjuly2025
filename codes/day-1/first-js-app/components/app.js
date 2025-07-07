//data
// const message = 'welome to web app'

//view
//templated string
// const view = `
//  <div>
//     <h2>${message}</h2>
//     <br>
//     <button type="button" id='btnClick'>
//         Click Me!!!
//     </button>
//  </div>
//     `

import { header } from "./header";
import { button } from "./button";
//component
export function app() {
    //view
    const headerElement = header()

    const breakElement = document.createElement('br')

    const buttonElement = button()

    const divElement = document.createElement('div')
    divElement.append(headerElement, breakElement, buttonElement)

    return divElement
}