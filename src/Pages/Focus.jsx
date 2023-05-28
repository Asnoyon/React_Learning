import React from 'react'

function Focus() {
    const focusText = (a)=>{
        a.target.style.backgroundColor="blue"
    }
    const blurText = (a)=>{
        a.target.style.backgroundColor="limegreen"
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