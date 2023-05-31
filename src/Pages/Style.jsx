import React from 'react'
import './Style.css'
import NoyonStyles from "./Noyon.module.css"
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
        <h2 className={NoyonStyles.noyon}> Hello external Css. How are you</h2>
        {/* <button className={NoyonStyles.noyonBtn}>Submit</button> */}
     <input type="button" className={NoyonStyles.noyonBtn} value="Submit"/>
    </div>
  )
}

export default Style