import React from 'react'
function Button() {

    function clicked() {
        window.alert('clicked....')
    }

    const buttonStyle = {
        borderStyle: 'solid',
        borderWidth: "1px",
        backgroundColor: "blue",
        height: "50px",
        width: "80px",
        color: "White"
    }
    return (
        <div>
            <button
                type="button"
                id="btnClick"
                style={buttonStyle}
                onClick={clicked}>
                Click Me!!!
            </button>
            <br />
            <p>this is an adjacent element</p>
        </div>
    )
}
export default Button