import React from 'react'

function ControlComponent() {
    function handler(){
        console.log("here")
    }
  return (
    <div className='container'> <br />
        <input type="text" value="" placeholder='Uncontrolled input' onChange={handler} />
        <h1>This is JavaScript Expressions {Math.random()*100}</h1>
    </div>
  )
}

export default ControlComponent