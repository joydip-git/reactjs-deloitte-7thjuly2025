import { createElement } from "react";
export function Button() {

    function clicked() {
        window.alert('clicked....')
    }

    const buttonElement = createElement(
        'button',
        {
            type: 'button',
            id: 'btnClick',
            style: {
                borderStyle: 'solid',
                borderWidth: "1px",
                backgroundColor: "blue",
                height: "50px",
                width: "80px",
                color: "White"
            },
            onClick: clicked
        },
        'Click Me!!!'
    )

    return buttonElement
}