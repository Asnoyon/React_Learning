// import React, { Component } from "react";

// class About extends Component{
//     render(){
//         return(
//             <>
//                 <h1>About page</h1>
//             </>
//         )
//     }
// }

// export default About;


import React,{Component} from "react";

class About extends Component{
    // state={
    //     name:"Noyon",
    //     age: 28,
    //     prof: {
    //         prof1: "Content Creating",
    //         prof2: "Web Designer",
    //         prof3: "Freelancer"
    //     }

    // }

    // another way state
    constructor(props){
        super(props);
        this.state= {
            name: "Noyon",
            Age: 28,
            prof: "programming"
        }
    }
    ChangeValue(a){
        this.setState(
            {
              prof: "Freelancing"  
            }
        )
    }
    changeMind = this.ChangeValue.bind(this, this.a)
    render(){
        return(
            <>
                <h1> My Profession is {this.state.prof} </h1>
                <button onClick={this.changeMind} >Change Value</button>
            </>
        )
    }
}
export default About;
