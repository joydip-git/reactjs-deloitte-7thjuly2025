import React from 'react'
function Header() {
    //data
    const message = 'welome to web app'

    const headerStyle = {
        backgroundColor: 'burlywood',
        textAlign: "center",
        fontFamily: "Segoe UI"
    }

    return <h2 style={headerStyle}>{message}</h2>
}

export default Header