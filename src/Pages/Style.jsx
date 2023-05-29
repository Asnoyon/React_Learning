import React from 'react'

function Style() {
    const styleH1={
        color:"white",
        backgroundColor:"green",
        textAlign: "center",
        padding:"20px",
        margin: "5px 0"
    }
  return (
    <div>
        <h1 style={styleH1}>My first style Component</h1>
    </div>
  )
}

export default Style