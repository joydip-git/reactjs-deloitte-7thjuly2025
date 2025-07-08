import { Button } from "./Button";
import { Header } from "./Header";
import { createElement } from "react";

function App() {
    //view
    const headerElement = Header()
    // const headerElement = Header()

    const breakElement = createElement('br')

    const buttonElement = Button()

    const divElement = createElement(
        'div',
        {},
        [headerElement, breakElement, buttonElement]
    )
    return divElement
}

export default App

//module.exports = App