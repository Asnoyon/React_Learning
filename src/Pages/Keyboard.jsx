import React from 'react'

function Keyboard() {
    const onKeyDownText = ()=>{
        console.log("key Down")
    }
    const onKeyUpText = ()=>{
        console.log("key Up")
    }
    const onKeyPressdText = ()=>{
        console.log("key pressed")
    }
  return (
    <div>
        <h1>Keyboard Event</h1>
        <input type="text" onKeyDown={onKeyDownText} />
        <input type="text" onKeyUp={onKeyUpText} />
        <input type="text" onKeyPress={onKeyPressdText} />
    </div>
  )
}

export default Keyboard