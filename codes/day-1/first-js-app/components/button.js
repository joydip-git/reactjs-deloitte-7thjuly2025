export function button() {
    //event handler
    function clicked() {
        window.alert('clicked....')
    }

    const buttonElement = document.createElement('button')
    buttonElement.innerText = "Click Me!!!"
    //buttonElement.type = "button"
    buttonElement.setAttribute('type', 'button')
    buttonElement.setAttribute('id', 'btnClick')

    buttonElement.style.borderStyle = "solid"
    buttonElement.style.borderWidth = "1px"
    buttonElement.style.backgroundColor = "blue"
    buttonElement.style.height = "50px"
    buttonElement.style.width = "80px"
    buttonElement.style.color = "White"

    buttonElement.addEventListener('click', clicked)

    return buttonElement
}