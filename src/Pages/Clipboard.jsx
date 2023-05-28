import React from 'react'

function Clipboard() {
    const copyText=()=>{
        alert("Copy Text")
    }
   const cutText = ()=>{
        alert("Text Cut")
    }
    const handlePaste = ()=>{
        alert("You can paste here")
    }
  return (
    <div>
        <div>
        <label htmlFor="">You can copy here</label>
        <input type="text"
            onCopy= {copyText}
            onCut = {cutText}
            onPaste={handlePaste}
            defaultValue="here you can copy or cut"
        />
        </div>
        <div>
            <label>You can paste here</label>
            <input type="text"
                 onCopy= {copyText}
                 onCut = {cutText}
                 onPaste={handlePaste}
                
            />
        </div>
    </div>
  )
}

export default Clipboard