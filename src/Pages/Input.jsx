import React, { Component } from 'react'

export default class Input extends Component {
    FormChange = (event)=>{
        console.log(event.target.target)
    }
    
  render() {
    return (
      <div className='container'>
         <input type="text" name='ChannelName' placeholder='Channel Name'  className='form-control' onChange={this.FormChange} />
      </div>
    )
  }
}
