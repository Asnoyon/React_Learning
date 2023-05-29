import React, { Component } from 'react'
import Filter from './Filter';

export default class WelcomeAdmin extends Component {
    constructor(props){
        super(props)
        this.state={
            YourAge:false,
        }
    }
  render() {
    let ami;
    if(this.state.YourAge){
        ami = "Welcome To my Class"
    }else{
        ami = <Filter/>
    }
    return (
      <div>{ami}</div>
    )
  }
}
