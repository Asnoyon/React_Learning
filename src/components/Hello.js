import React from "react";


const Hello = ()=>{
    // return(
    //     <div>
    //         <h1>Hello React</h1>
    //     </div>
    // )

    return React.createElement('div',null, React.createElement('h1',null,"New Code"))
}
export default Hello