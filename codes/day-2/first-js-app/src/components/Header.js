import { createElement } from "react";
export function Header() {
    //data
    const message = 'welome to web app'

    const headerElement = createElement(
        'h2',
        {
            style: {
                backgroundColor: 'burlywood',
                textAlign: "center",
                fontFamily: "Segoe UI"
            }
        },
        message)

    return headerElement
}