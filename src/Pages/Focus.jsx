import React from 'react'

function Focus() {
    const focusText = ()=>{
        console.log("You have focus on input tag")
    }
    const blurText = ()=>{
        console.log("You have blur on input tag")
    }
  return (
    <div><br /><br />
        <h1>Focus event</h1>

        <input type="text" onFocus={focusText} />
        <input type="text" onBlur={blurText} />
    </div>
  )
}

export default Focus