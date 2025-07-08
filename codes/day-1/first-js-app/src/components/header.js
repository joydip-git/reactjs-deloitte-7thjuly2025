export function header() {
    //data
    const message = 'welome to web app'

    const headerElement = document.createElement('h2')
    headerElement.innerHTML = message
    headerElement.style.backgroundColor = "burlywood"
    headerElement.style.textAlign = "center"
    headerElement.style.fontFamily = "Segoe UI"

    return headerElement
}