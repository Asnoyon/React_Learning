import React from 'react'
import './Style.css'
function Style() {
    const styleH1={
        color:"white",
        backgroundColor:"green",
        textAlign: "center",
        padding:"20px",
       
    }
  return (
    <div>
        <h1 style={styleH1}>My first style Component</h1>
        <h2 className='noyon'> Hello external Css. How are you</h2>
    </div>
  )
}

export default Style