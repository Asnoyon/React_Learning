import React from "react";
import About from "./About";

const AboutMe= "My name is Noyon"
function Home (){
    return (
        <div>
            <h1>Header</h1>
            <h1>Sidebar</h1>
            <h1>Footer</h1>
            <h1>{AboutMe}</h1>
        </div>
    )
}
export default Home;
